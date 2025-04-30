import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

const URL_BASE = 'https://teste-qa.d3vl799vf6z3om.amplifyapp.com/{{TOKEN}}';
const URL_CARRINHO = 'https://teste-qa.d3vl799vf6z3om.amplifyapp.com/{{TOKEN}}/checkout';
// const RECEITA_TESTE = 'MIXF53M';

describe('Receita', () => {
  test('Carregar receita', async ({ page }) => {
    await page.goto('');
  });
});
