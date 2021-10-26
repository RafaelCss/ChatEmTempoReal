# Utilizei o Prisma para realizar a conexão com banco de dados
# Banco Mysql

## Configurações :


# Para criar as migrations com prisma : npx prisma migrate dev --name init

# O que ele executa :

. Ele cria um novo arquivo de migração SQL para esta migração
. Ele executa o arquivo de migração SQL no banco de dados


# Nota : generate é chamado sob o capô por padrão, após a execução prisma migrate dev. Se o prisma-client-jsgerador estiver definido em seu esquema, isso verificará se @prisma/client está instalado e instalará se estiver faltando.