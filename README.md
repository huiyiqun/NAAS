# DNS As A Service
This program is designed to run as a remote backend of a powerDNS,
Resolving requests, defering them to different backend and then caching
the responses(optional).

In fact, this program is a set of middlewares providing registration,
cache, request resolving(to geographic information) for real backends.

## Use case

### User request for DNS record
```
+----------+ Request +----------+ Request  +------+
|  client  |-------->| PowerDNS |--------->| DAAS |
+----------+         +----------+          +------+
                Middlewares                    | |
    +------------------------------------------+ +------+
    |   +-----+   +-------+   +-------+   +---------+   |
    +-->| Log |-->| GeoIP |-->| Cache |-->| Request |---+
        +-----+   +-------+   +-------+   +---------+
                                                |  Dispatch
                                          +-----+-----+-----------+
                                          |           |           |
                                    +-----+----++-----+----++----------+
                                    | Backend1 || Backend2 || Backend3 |
                                    +----------++----------++----------+
```

### Backend register callback
```
+-----------+   Register  +--------+
|  Backend  |------------>|  DAAS  |
+-----------+             +--------+
```

### Backend unregister callback
```
+-----------+  Unregister +--------+
|  Backend  |------------>|  DAAS  |
+-----------+             +--------+
```

## API
TODO
