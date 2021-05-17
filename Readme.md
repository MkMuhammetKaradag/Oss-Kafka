## Kafka Api
Distributes Post Json Object sent by producer to Topics


### Setup & Installation

```sh
git clone https://github.com/MkMuhammetKaradag/Oss-Kafka.git
```

```sh
cd Oss-Kafka
```

```sh
docker-compose up --build
```

### Curl Request
```sh
curl -X POST  -d "[{\"id\":\"1\"},{\"id\":\"2\"}]" -H "Content-Type: application/json" localhost:3000/producer
```
#### Output
<pre>
<i>
    Gelen Mesaj {"id":"1"}, Par => 0
    Gelen Mesaj {"id":"2"}, Par => 1
</i>
</pre>
