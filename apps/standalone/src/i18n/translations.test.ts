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

  it('uses Polish diacritics in package and standalone copy', () => {
    expect(translateStandalone('pl', 'nav.language')).toBe('Język');

    expect({
      usernameRequired: translateStandalone('pl', 'skinView.error.usernameRequired'),
      playerNotFound: translateStandalone('pl', 'skinView.error.playerNotFound'),
      skinTextureMissing: translateStandalone('pl', 'skinView.error.skinTextureMissing'),
      network: translateStandalone('pl', 'skinView.error.network'),
      serviceUnavailable: translateStandalone('pl', 'skinView.error.serviceUnavailable'),
      rateLimited: translateStandalone('pl', 'skinView.error.rateLimited'),
      invalidResponse: translateStandalone('pl', 'skinView.error.invalidResponse'),
      notFoundTitle: translateStandalone('pl', 'notFound.title'),
      notFoundDescription: translateStandalone('pl', 'notFound.description'),
      backToCreator: translateStandalone('pl', 'notFound.backToCreator'),
    }).toEqual({
      usernameRequired: 'Podaj nazwę gracza Minecraft.',
      playerNotFound: 'Nie znaleziono gracza Minecraft.',
      skinTextureMissing: 'Ten gracz nie ma dostępnej tekstury skina.',
      network: 'Nie udało się połączyć z PlayerDB. Sprawdź połączenie i spróbuj ponownie.',
      serviceUnavailable: 'PlayerDB jest chwilowo niedostępne. Spróbuj ponownie później.',
      rateLimited: 'Za dużo zapytań o graczy. Spróbuj ponownie za chwilę.',
      invalidResponse: 'PlayerDB zwróciło nieoczekiwaną odpowiedź. Spróbuj ponownie później.',
      notFoundTitle: 'Nie znaleziono strony',
      notFoundDescription: 'Ten adres nie prowadzi do żadnej strony SkinCraftera.',
      backToCreator: 'Wróć do kreatora',
    });
  });
});
