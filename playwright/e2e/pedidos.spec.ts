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
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-D2JOOV')
  //await page.getByTestId('search-order-button').click() --alterado para o novo nome do botão
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()
  

  // Assert
  // await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 5_000}) // timeout explicita para  exemplo10 segundos melhor método para espera
  // await expect(page.getByTestId('order-result-id')).toContainText('VLO-D2JOOV')
  

  // await expect(page.getByTestId('order-result-status')).toBeVisible()
  // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
  await expect(page.getByText('VLO-D2JOOV')).toBeVisible()
  await expect(page.getByText('APROVADO')).toBeVisible()
  

})