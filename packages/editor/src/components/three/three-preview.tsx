import React, { useEffect, useRef, useState } from 'react';
import { defaultPreviewTextureUrl } from '../../assetResolver';
import type { SkinCrafterError } from '../../publicTypes';
import type { Pose } from './pose-utils';
import {
  createThreePreviewRuntime,
  type SkinModel,
  type ThreePreviewRuntime,
  type ThreePreviewRuntimeError,
} from './three-preview-runtime';

export type { SkinModel } from './three-preview-runtime';

interface ThreePreviewProps {
  texture: string | null;
  pose?: Pose;
  model?: SkinModel;
  showOverlay?: boolean;
  autoRotate?: boolean;
  bottomOffset?: number;
  style?: React.CSSProperties;
  onError?: (error: SkinCrafterError) => void;
}

function mapRuntimeError(error: ThreePreviewRuntimeError): SkinCrafterError {
  return {
    code: 'preview_texture_load_failed',
    category: 'preview',
    message: `Failed to load preview texture: ${error.textureUrl}`,
    assetUrl: error.textureUrl,
    cause: error.cause,
  };
}

export default function ThreePreview({
  texture,
  pose = 'default',
  model = 'classic',
  showOverlay = true,
  autoRotate = true,
  bottomOffset = 0,
  style,
  onError,
}: ThreePreviewProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const runtimeRef = useRef<ThreePreviewRuntime | null>(null);
  const onErrorRef = useRef(onError);
  const initialOptionsRef = useRef({
    textureUrl: texture ?? defaultPreviewTextureUrl,
    pose,
    model,
    showOverlay,
    autoRotate,
    onError: (error: ThreePreviewRuntimeError) => onErrorRef.current?.(mapRuntimeError(error)),
  });
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let runtime: ThreePreviewRuntime;
    try {
      runtime = createThreePreviewRuntime(container, initialOptionsRef.current);
    } catch (cause) {
      onErrorRef.current?.({
        code: 'preview_webgl_initialization_failed',
        category: 'preview',
        message: 'Failed to initialize the WebGL skin preview.',
        cause,
      });
      return;
    }

    runtimeRef.current = runtime;

    return () => {
      runtime.dispose();
      if (runtimeRef.current === runtime) {
        runtimeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    runtimeRef.current?.setTexture(texture ?? defaultPreviewTextureUrl);
  }, [texture]);

  useEffect(() => {
    runtimeRef.current?.setModel(model);
  }, [model]);

  useEffect(() => {
    runtimeRef.current?.setPose(pose);
  }, [pose]);

  useEffect(() => {
    runtimeRef.current?.setShowOverlay(showOverlay);
  }, [showOverlay]);

  useEffect(() => {
    runtimeRef.current?.setAutoRotate(autoRotate);
  }, [autoRotate]);

  useEffect(() => {
    const updateHeight = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const viewportHeight = document.documentElement.clientHeight;
      const height = viewportHeight - rect.top - bottomOffset;
      setContainerHeight(height > 0 ? height : 0);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [bottomOffset]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: 200,
        height: containerHeight ? `${containerHeight}px` : '100%',
        position: 'relative',
        touchAction: 'none',
        ...(style ?? {}),
      }}
    />
  );
}
