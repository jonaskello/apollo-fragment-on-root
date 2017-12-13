# How to start

```
yarn install
yarn start
```

# Same query on demo server

Follow [this link](http://graphql.org/swapi-graphql/?query=query%20MyQuery%20%7B%0A%20%20...TheFilms%0A%20%20...ThePeople%0A%7D%0A%0Afragment%20TheFilms%20on%20Root%20%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20ThePeople%20on%20Root%20%7B%0A%20%20allPeople%20%7B%0A%20%20%20%20people%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=MyQuery).
