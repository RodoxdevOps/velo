import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert 
/// PAV - Preparar, Agir, Validar

test('deve consultar um pedido aprovado', async ({ page }) => { // Async garante que cada step seja executado de forma assíncrona
    // Arrange
  await page.goto('http://localhost:5173/') // GO TOgarante carregra a página
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint') // EXPECT Garantir que tenha a descrição

  await page.getByRole('link', { name: 'Consultar Pedido' }).click() //await garante que o click seja executado
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // Act
  await page.getByTestId('search-order-id').fill('VLO-D2JOOV')
  await page.getByTestId('search-order-button').click()

  // Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-D2JOOV')

  await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
  

})