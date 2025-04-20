# Configuração do EmailJS para o Formulário de Contato

O formulário de contato já está configurado com as seguintes credenciais do EmailJS:

- Service ID: `service_x6g9qmh`
- Template ID: `template_lbpsznn`
- User ID: `iWPAipcDH75YQz_el`

## Verificação da Configuração

Para garantir que tudo está funcionando corretamente, verifique se:

1. A conta do EmailJS está ativa
2. O serviço de email configurado está conectado corretamente
3. O template de email contém os parâmetros corretos:
   - `from_name`: Nome do remetente
   - `from_email`: Email do remetente
   - `message`: Mensagem do formulário
   - `to_email`: uxdanieljr@gmail.com

## Testando o Formulário

Após a implantação do site, teste o formulário enviando uma mensagem de teste para verificar se os emails estão sendo recebidos corretamente no endereço uxdanieljr@gmail.com.

## Solução de Problemas

Se os emails não estiverem sendo recebidos:

1. Verifique o console do navegador para erros
2. Confirme se as credenciais do EmailJS estão corretas
3. Verifique se o template do EmailJS está configurado corretamente
4. Certifique-se de que o serviço de email está ativo e funcionando

## Observações

- O plano gratuito do EmailJS permite até 200 emails por mês
- Para volumes maiores, considere atualizar para um plano pago
- Certifique-se de que seu provedor de email permite o envio de emails via SMTP
