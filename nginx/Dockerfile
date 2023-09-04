# Imagem base da nossa imagem
FROM nginx:latest

# Diretório no qual vou trabalhar dentro do container
WORKDIR /app

# Comando que serão rodados
RUN apt-get update

# Copiar arquivo dentro do computador para dentro do container
COPY html /usr/share/nginx/html
 
# Esse comando sempre vai ser executado, então é fixo.
# ENTRYPOINT [ "echo", "Hello" ]

# Esse comando vai ser executado, mas é variável, então pode ser subsitituido: docker run --rm miguelviannfeiteira/hello echo "oi"
# CMD [  "World" ]

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]