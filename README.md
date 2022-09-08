### Streaming Video Api
​
## Url Base
​
https://streaming-v1deo.herokuapp.com
​
### Cadastro usuário:
​
`POST` /users
​
**Formato de requisição:**
​
```
    {
    "name":"Jonh Hank",
    "email":"jonh.hank@email.com",
    "password":"123456",
    "avatar": "https://i.pinimg.com/736x/04/2c/aa/042caad0404cafab2fcf3c9ef8ac51f7.jpg",
    "watch_later:" []
    }
```
​
**Formato de resposta:**
´´´
{
"name": "Jonh Hank",
"email": "jonh.hank@email.com",
"password": "123456",
"avatar": "https://i.pinimg.com/736x/04/2c/aa/042caad0404cafab2fcf3c9ef8ac51f7.jpg",
"id": 5
}
´´´
​
### Login de usuário:
​
_Todas as validações serão feitas através do frontEnd_
_Sendo assim, iremos utilizar o método GET para solicitar receber os dados cadastrados_
​
`GET` /users
​
**Formato de resposta:**
​
```
    [
	{
		"id": 1,
		"name": "Carl John",
		"email": "carl.John@email.com",
		"password": "$2a$10$uj5NkgH1mIhBBq8eI.u9u.ZvVOa59bIBPCPS5u6VfjK2v4JdDu1ru",
		"avatar": "",
		"watch_later": []
	},
	{
		"email": "carl.John@email.com",
		"password": "$2a$10$uj5NkgH1mIhBBq8eI.u9u.ZvVOa59bIBPCPS5u6VfjK2v4JdDu1ru",
		"id": 2,
        "avatar": "",
		"watch_later": []
	},
	{
		"email": "carl.John@email.com",
		"password": "123456",
		"id": 3,
        "avatar": "",
		"watch_later": []
	}
]
```
​
_Feito isso, criaremos uma lógica para verificar se os dados que o usuário digitou_
_Está de acordo com o que está no banco de dados._
_Caso os dados estejam incorretos, exibir mensagem de erro._
​
### Autenticação
​
_Criar um estado booleano para verificar se o usuário está logado ou não. Não permitir o usuário não logado acessar o_
_dashboard/comunity_
​
### Recebendo dados no Dashboard
​
`GET` /movies || `GET` /series
​
**Formato de resposta**
​
```
[
	{
		"id": 1,
		"title": "Herança de Sangue(Blood Father)",
		"sinopse": "John Link (Mel Gibson) vive em meio ao deserto na Califórnia onde seu trailer também serve como estúdio de tatuagem. Vivendo longe de drogas e violência, ele tem seu cotidiano afetado com a chegada de sua filha desaparecida que está jurada de morte por traficantes. Ele fará de tudo para protegê-la.",
		"year": "2016",
		"genre": "acao",
		"rating": 14,
		"alt_genres": "Ação/Aventura",
		"type": "movie",
		"poster": "https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg",
		"trailer": "https://www.youtube.com/embed/FROZFnLE5IU",
		"rate": 3,
		"opinion": []
	},
	{
		"id": 2,
		"title": "Top Gun - Ases Indomáveis",
		"sinopse": "Em Top Gun - Ases Indomáveis, Pete Mitchell (Tom Cruise), um jovem piloto, ingressa na Academia Aérea para se tornar piloto de caça. Lá, ele se envolve com Charlotte Blackwood (Kelly McGillis), uma bela mulher, e enfrenta um competidor à sua altura (Val Kilmer).",
		"year": "1986",
		"genre": "acao",
		"rating": 12,
		"alt_genres": "Ação/Aventura",
		"type": "movie",
		"poster": "https://musicaecinema.com/wp-content/uploads/2013/11/top-gun-capa.jpg",
		"trailer": "https://www.youtube.com/embed/kT4Yz8ifxOw",
		"rate": 4,
		"opinion": []
	}
]
​
```
​
### Buscando serie ou filme por ID
​
`GET` /movies/:id | `GET` /series/:id
​
> Veja o exemplo abaixo:
​
`https://streaming-v1deo.herokuapp.com/movies/2`
​
**_ Formato de resposta: _**
​
```
​
{
	"id": 2,
	"title": "Top Gun - Ases Indomáveis",
	"sinopse": "Em Top Gun - Ases Indomáveis, Pete Mitchell (Tom Cruise), um jovem piloto, ingressa na Academia Aérea para se tornar piloto de caça. Lá, ele se envolve com Charlotte Blackwood (Kelly McGillis), uma bela mulher, e enfrenta um competidor à sua altura (Val Kilmer).",
	"year": "1986",
	"genre": "acao",
	"rating": 12,
	"alt_genres": "Ação/Aventura",
	"type": "movie",
	"poster": "https://musicaecinema.com/wp-content/uploads/2013/11/top-gun-capa.jpg",
	"trailer": "https://www.youtube.com/embed/kT4Yz8ifxOw",
	"rate": 4,
	"opinion": []
}
​
```
​
### Editando o perfil
​
`PATCH` /users/:id
​
> O body deve conter o item que voce deseja alterar o valor dele.Veja um exemplo abaixo:
​
_1- Pegando os dados de usuários_
`GET` https://streaming-v1deo.herokuapp.com/users/1
​
**_ Formato de resposta: _**
​
```
    {
        "id": 1,
        "name": "JUBÂO Porcão",
        "email": "carl.John@email.com",
        "password": "$2a$10$uj5NkgH1mIhBBq8eI.u9u.ZvVOa59bIBPCPS5u6VfjK2v4JdDu1ru",
        "avatar": "none",
        "watch_later": [
            {
                "id": 1,
                "title": "Herança de Sangue(Blood Father)",
                "sinopse": "John Link (Mel Gibson) vive em meio ao deserto na Califórnia onde seu trailer também serve como estúdio de tatuagem. Vivendo longe de drogas e violência, ele tem seu cotidiano afetado com a chegada de sua filha desaparecida que está jurada de morte por traficantes. Ele fará de tudo para protegê-la.",
                "year": "2016",
                "genre": "acao",
                "rating": 14,
                "alt_genres": "Ação/Aventura",
                "type": "movie",
                "poster": "https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg",
                "trailer": "https://www.youtube.com/embed/FROZFnLE5IU",
                "rate": 3
            }
        ]
    }
​
```
​
_2 - Alterando o nome_
`PATCH` https://streaming-v1deo.herokuapp.com/users/1
​
**_ Formato de requisição(body) _**
​
```
{
    "name":"Jonh Rabetão"
}
```
​
**_Formato de resposta_**
​
```
{
	"id": 1,
	"name": "Jonh Rabetão",
	"email": "carl.John@email.com",
	"password": "$2a$10$uj5NkgH1mIhBBq8eI.u9u.ZvVOa59bIBPCPS5u6VfjK2v4JdDu1ru",
	"avatar": "none",
	"watch_later": [
		{
			"id": 1,
			"title": "Herança de Sangue(Blood Father)",
			"sinopse": "John Link (Mel Gibson) vive em meio ao deserto na Califórnia onde seu trailer também serve como estúdio de tatuagem. Vivendo longe de drogas e violência, ele tem seu cotidiano afetado com a chegada de sua filha desaparecida que está jurada de morte por traficantes. Ele fará de tudo para protegê-la.",
			"year": "2016",
			"genre": "acao",
			"rating": 14,
			"alt_genres": "Ação/Aventura",
			"type": "movie",
			"poster": "https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg",
			"trailer": "https://www.youtube.com/embed/FROZFnLE5IU",
			"rate": 3
		}
	]
}
​
```
​
### Removendo o perfil
​
`DELETE` /users/:id
​
**Formato de resposta:**
​
```
    {}
```
​
### Listando opiniões (Series e filmes)
​
`GET` /opinions
​
**Formato de resposta:**
​
```
[
	{
		"id": 1,
		"moviesId": 0,
		"seriesId": 2,
		"usersId": 1,
		"content": "Que série incrível incrível! Cada episódio deixa um gostinho de quero mais!",
		"rate": 5
	},
	{
		"id": 2,
		"seriesId": 0,
		"moviesId": 1,
		"usersId": 1,
		"content": "Que filme incrível! Estou impressionado com o elenco",
		"rate": 5
	}
]
​
```
​
### Listando opiniões (Series)
​
`GET` /opinions?moviesId=0
​
> Para entender melhor o conceito do url, veja a seção de Criando opinião sobre filme/série.
​
**Formato de resposta:**
​
```
   [
        {
            "id": 1,
            "moviesId": 0,
            "seriesId": 2,
            "usersId": 1,
            "content": "Que série incrível incrível! Cada episódio deixa um gostinho de quero mais!",
            "rate": 5
        }
    ]
​
```
​
### Listando opiniões(filmes)
​
`GET` /opinions?seriesId=0
​
**Formato de resposta:**
​
```
    [
        {
            "id": 2,
            "seriesId": 0,
            "moviesId": 1,
            "usersId": 1,
            "content": "Que filme incrível! Estou impressionado com o elenco",
            "rate": 5
        }
    ]
```
​
### Listando opiniões de um usuário
​
`GET` /opinions?usersId=${idUsuario}
​
> Exemplo
> https://streaming-v1deo.herokuapp.com/opinions?usersId=1
​
**Formato de resposta**
​
```
    [
        {
            "id": 1,
            "moviesId": 0,
            "seriesId": 2,
            "usersId": 1,
            "content": "Que série incrível incrível! Cada episódio deixa um gostinho de quero mais!",
            "rate": 5
        },
        {
            "id": 2,
            "seriesId": 0,
            "moviesId": 1,
            "usersId": 1,
            "content": "Que filme incrível! Estou impressionado com o elenco",
            "rate": 5
        }
    ]
```
​
### Criando opinião sobre filme
​
`POST` /opinions
​
**Para requisição, enviaremos JSON no seguinte formato:**
​
`"seriesId"`: Valor referente a série pela qual se está opinando.Se não for uma série, envie o valor como 0
`"moviesId"`: Valor referente ao filme pelo qual se está opinando.Se não for um filme, envie o valor como 0
`"usersId"`: Valor referente ao ID de usuário
`"content"`: Valor referente ao comentário
`"rate"`: valor referente a avaliação. Este valor sempre sempre do tipo **Number** e **Inteiro**.
​
> Para esta sessão utilizaremos um mecanismo para tipar nossas opiniões sobre séries e videos
> Para isto, utilizaremos as chaves "moviesId" para filmes e "seriesId" para séries
> Se a opinião for sobre uma série, por exemplo, o "moviesId" vai receber o valor 0, enquanto que
> a "seriesId" recebe o valor referente ao id da série em questão.
​
**Veja o exemplo abaixo:**
​
_Criando uma opinião sobre um filme_
​
```
{
	"seriesId":  0,
	"moviesId": 13,
	"usersId": 1,
	"content": "Que filme impressionante! Fiquei vidrado na telinha a cada segundo de filme! Parabéns aos responsáveis",
	"rate": 5
}
​
```
​
_Se tudo der certo, esta vai ser a resposta:_
​
```
    {
	"seriesId": 0,
	"moviesId": 13,
	"usersId": 1,
	"content": "Que filme impressionante! Fiquei vidrado na telinha a cada segundo de filme! Parabéns aos responsáveis",
	"rate": 5,
	"id": 3
}
​
```
​
### Editando uma opinião
​
`PATCH` /opinions/:id
​
**Formato de requisição**
​
_Alterando o valor da avaliação da ultima opinião_
​
http://localhost:3000/opinions/3
​
```
{
	"rate": 3
}
​
```
​
_Se tudo der certo, ele deverá retornar assim:_
​
```
    {
        "seriesId": 0,
        "moviesId": 13,
        "usersId": 1,
        "content": "Que filme impressionante! Fiquei vidrado na telinha a cada segundo de filme! Parabéns aos responsáveis",
        "rate": 3,
        "id": 3
    }
```
​
### Removendo uma opinião
​
`DELETE` /opinions/3
​
**_ Formato de reposta _**
​
````
    {}
```
````
