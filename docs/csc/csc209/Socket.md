# Socket

Before we talk about socket, we should probably know how the internet's workflow.

When we send message, we actually send a data package to some servers. And those servers will send the those data package to to specific ports according to the data package description. And the software in that port will work on our data package and send back the information we need. Some ports we always use:

-   80: http default port
-   443: https default port
-   25565: Minecraft default port
-   23:  Telnet (part of TCP/IP)
-   21 : FTP
-   ...

`int socket(int domain, int type, int protocol):` return a file descriptor or `-1` on error

-   `domain`: set the rule of  `protocol` 
-   `type`: the type of sockets
-   `protocol`: use `0` to tell system use default

The domain:

-   `AF_INET:` Address family internet (same as `PF_INET`)
-   `PF_INET`: Protocol family internet (same as `AF_INET`)
-   ...

There are many types sockets:

-   `SOCK_DGRAM`: Datagram sockets
-   `SOCK_STREAM` : Stream sockets(TCP), connection-oriented sockets, no loss guaranteed and ordered delivery
-   `SOCK_RAW`: Raw sockets
-   ...

And we have a structure to store socket information:

```c
struct sockaddr_in{
    short sin_family;
    u_short sin_port;
    struct in_addr sin_addr;
    char sin_zero[8];
}
```

The above socket address is one of the socket address we can use in `sockaddr` by `(struct sockaddr) &addr_in`

-   `sin_family`: same as the socket family
-   `sin_port`: the port will be listen to, we will use `htons(int portsNum)` to refer this value where `htons` stands hosts-to-network-short
-   `sin_addr`: server will usually set as any. for example `sin_addr.s_addr = INADDR_ANY`, client will set it the server address
-   `sin_zero`: will usually set as 0 by `memset`

For `.sin_addr` we can use `inet_pton` function to convert IPV4 and IPV6 addresses from text to binary form.\

`int inet_pton(int af, const char *src, void *dst):` return 1 on successful convert or -1 on error or 0 if text does not contain a valid network address.

## bind system call

`int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen):` return 0 if bind success or `-1` on error


## listen system call

`int listen(int sockfd, int backlog)`: return 0 success or `-1` on error

-   `backlog` the max number of partial connections the server can hold

## accept system call

`int accept(int sockfd, struct sockaddr *addr, socklen_t  *addlen)`: return a new socket file descriptor use to communicate with the client, or `-1` on error

-   `addr`: we should create a new `struct scokaddr_in` for client address to store its data
-   `addlen`: the `sizeof(addr)` 

accept will blocking system 'till connections

## connect system call

`int connect(int sockfd, const struct sockaddr *address, socklen_t addrlen):`return a new socket file descriptor use to communicate with the server, or `-1` on error

-   `address`: use `getaddrinfo` to write `result` and cast `result->ai_addr` into `sockaddr`
-   `addrlen`: the `sizeof(address`)`

`int getaddrinfo(char *host, char *service, stuct addrinfo *hints, struct addrinfo **result):`

-   `host`: the domain name
-   `service`: for page we don't care
-   `hints`: for page we don't care
-   `result`: use a new `struct addrinfo` to store the server info