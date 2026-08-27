import { describe, expect, it } from 'vitest';
import { translateStandalone } from './translations';

describe('standalone translations', () => {
  it('translates package and standalone copy into Brazilian Portuguese', () => {
    expect(translateStandalone('pt-BR', 'nav.wardrobe')).toBe('Criador');
    expect(translateStandalone('pt-BR', 'skinView.error.playerNotFound')).toBe(
      'Jogador do Minecraft não encontrado.'
    );
    expect(translateStandalone('pt-BR', 'notFound.backToCreator')).toBe('Voltar ao criador');
  });
});
