# Utilizei o Prisma para realizar a conexão com banco de dados
# Banco Mysql

## Configurações :


# Para criar as migrations com prisma : npx prisma migrate dev --name init

# O que ele executa :

. Ele cria um novo arquivo de migração SQL para esta migração
. Ele executa o arquivo de migração SQL no banco de dados

# Prisma Studio é um editor visual para os dados em seu banco de dados. Você pode executá-lo de duas maneiras:

. npx prisma studio
. Instale o aplicativo de desktop a partir dos instaladores. Windows, macOS e Linux são suportados.


# Nota : generate é chamado sob o capô por padrão, após a execução prisma migrate dev. Se o prisma-client-jsgerador estiver definido em seu esquema, isso verificará se @prisma/client está instalado e instalará se estiver faltando.


# Express com TypeScript

. npm install --save @types/express