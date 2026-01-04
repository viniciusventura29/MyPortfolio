---
title: O que é WebSocket
description: Uma explicação clara sobre WebSocket, como esse protocolo funciona e por que é usado. Se você quer entender comunicação em tempo real, clique aqui!
publishDate: "Dec 11 2022"
image: /blogg/websocket/websocketWallpaper.jpg
time: 2 
draft: false
translationKey: websocket
---

Alguns meses atrás trabalhei em alguns projetos usando este protocolo, e neste artigo vou compartilhar o que aprendi.

## O que é WebSocket e por que é usado?

WebSocket é uma forma diferente de lidar com comunicação na web. Diferente do HTTP, o WebSocket não segue o modelo tradicional de "requisição-resposta". Em vez disso, ele fornece comunicação bilateral, o que nos dá a capacidade de receber informações do servidor sem solicitá-las explicitamente.

## Como o HTTP funciona

Vamos entender rapidamente como o HTTP funciona para apreciar melhor o WebSocket.

No HTTP, precisamos fazer uma requisição para receber uma resposta. Veja o exemplo abaixo:

![Modelo de requisição-resposta HTTP](/blogg/websocket/http.png)

Eu pedi uma página do site, e ele retornou o que eu solicitei. Seguindo a mesma lógica, se eu não pedir nada, não vou receber nada!

É aqui que surgem os problemas. Imagine construir uma aplicação em tempo real com HTTP... Não podemos saber quando novas informações chegam ao servidor, e o cliente só receberá atualizações se pedir explicitamente por elas. Para conseguir algo próximo do tempo real, precisaríamos fazer requisições infinitas, mesmo quando não há nada novo para receber. Isso é muita requisição constante apenas para verificar se algo mudou.

## Polling

Para contornar esse problema, existe uma técnica chamada polling. É quando um sistema verifica regularmente outro sistema por atualizações, enviando requisições periódicas.

Essa técnica foi desenvolvida para alcançar uma experiência próxima do tempo real sem consumir recursos computacionais excessivos.

### Exemplo

![Exemplo de polling](/blogg/websocket/polling.png)

Neste exemplo, o cliente envia uma requisição ao servidor a cada 30 segundos. Quando o servidor recebe essa requisição, ele retorna uma resposta com quaisquer atualizações disponíveis.

## Como o WebSocket funciona

O WebSocket nos traz uma solução para esse tipo de problema. Como mencionei anteriormente, o WebSocket não segue o modelo HTTP de "requisição e resposta". Em vez disso, é como um túnel de informação — constantemente enviando e recebendo.

O cliente não precisa "pedir" informações para receber atualizações. O servidor as envia automaticamente. Ambos os lados podem se comunicar livremente: cliente para servidor e servidor para cliente.

![Comunicação bilateral WebSocket](/blogg/websocket/websocket.png)

## Conclusão

WebSocket é um protocolo interessante, mas não é apropriado para todos os casos. Desenvolver com este protocolo não é a coisa mais fácil de fazer, e você pode perder desempenho em certos cenários. Então, você precisa pensar cuidadosamente e avaliar se vale a pena usar essa tecnologia na sua aplicação.

Este é o fim deste artigo curto. Espero que você tenha aprendido algo e gostado! Obrigado por ler.

