#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
import re
import sys

WORKFLOWS = Path(".github/workflows")
FALSE_VALUES = {"false", "'false'", '"false"'}


def step_block(lines: list[str], index: int) -> list[str]:
    base_indent = len(lines[index]) - len(lines[index].lstrip())
    block = [lines[index]]
    for line in lines[index + 1 :]:
        stripped = line.strip()
        indent = len(line) - len(line.lstrip())
        if stripped.startswith("-") and indent < base_indent:
            break
        block.append(line)
    return block


def has_setting(block: list[str], key: str, value: str) -> bool:
    pattern = re.compile(rf"^{re.escape(key)}:\s*{re.escape(value)}\s*$", re.IGNORECASE)
    return any(pattern.match(line.strip()) for line in block)


def main() -> int:
    errors: list[str] = []
    for path in sorted(WORKFLOWS.glob("*.y*ml")):
        lines = path.read_text(encoding="utf-8").splitlines()
        for index, line in enumerate(lines):
            stripped = line.strip()
            if not stripped or stripped.startswith("#"):
                continue

            if re.search(r"uses:\s*actions/cache(?:/[^@\s]+)?@", stripped, re.IGNORECASE):
                errors.append(f"{path}:{index + 1}: actions/cache is forbidden")

            match = re.match(r"cache:\s*(.+)$", stripped, re.IGNORECASE)
            if match and match.group(1).strip().lower() not in FALSE_VALUES:
                errors.append(f"{path}:{index + 1}: cache must remain disabled")

            match = re.match(r"package-manager-cache:\s*(.+)$", stripped, re.IGNORECASE)
            if match and match.group(1).strip().lower() not in FALSE_VALUES:
                errors.append(f"{path}:{index + 1}: package-manager-cache must remain false")

            if re.search(r"cache-(?:to|from):.*type=gha", stripped, re.IGNORECASE):
                errors.append(f"{path}:{index + 1}: GitHub Actions build cache is forbidden")

            block = step_block(lines, index)
            if "uses: gradle/actions/setup-gradle@" in stripped and not has_setting(block, "cache-disabled", "true"):
                errors.append(f"{path}:{index + 1}: setup-gradle requires cache-disabled: true")

            if "uses: subosito/flutter-action@" in stripped and not has_setting(block, "cache", "false"):
                errors.append(f"{path}:{index + 1}: flutter-action requires cache: false")

            node_match = re.search(r"uses:\s*actions/setup-node@v(\d+)", stripped, re.IGNORECASE)
            if node_match and int(node_match.group(1)) >= 6 and not has_setting(block, "package-manager-cache", "false"):
                errors.append(f"{path}:{index + 1}: setup-node v6+ requires package-manager-cache: false")

    if errors:
        print("GitHub Actions cache must stay disabled:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("GitHub Actions cache policy: OK (cache disabled).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
