# docker-movies
Trabalho de Docker e Docker Compose para a cadeira **CK0205 - DESENVOLVIMENTO DE SOFTWARE PARA NUVEM (2024.1 - T01)**
Alunos: Havillon Barros (508017) e Murilo Pinheiro (510613)

---

Passo a passo para execução do sistema:

1. Subir o container

É necessário executar o comando `docker-compose up --build -d` no diretório raiz do projeto, para que sejam inicializados os containers do banco relacional PostgreSQL, do frontend, backend e do MinIO.

2. Configurações do MinIO

Após todos os containers estarem em execução, é preciso tornar o bucket movies público, para que as imagens possam ser acessadas facilmente dentro do sistema. Para fazer isso, acesse a url `http://localhost:9001/` e faça login com as credenciais de usuário e senha: "minioadmin".

Feito isso você irá acessar o bucket padrão "movies" e, nas configurações, alterar a política de acesso para público.

3. Acessar o sistema

Feita a configuração do bucket, agora o sistema estará funcionando corretamente em `http://localhost:5173`, e conforme os filmes forem sendo inseridos, é possível verificá-las dentro do bucket na url do passo anterior.

**Cuidado:** realizar o upload de imagens de tamanho menor que 10MB.

4. Observações

O sistema gera logs que são armazenados no DynamoDB, essa tabela não foi criada dentro da conta da Academy pois estava apresentando problemas, então tivemos que criar externamente. Esses logs não são exibidos no sistema, mas é possível vê-los (e uma demostração do sistema como um todo) [clicando aqui](https://www.example.com).

Segue também o [link do repositório](https://www.github.com/havillonf/trabalho-docker-movies)