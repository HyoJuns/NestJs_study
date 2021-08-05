# NEST 구조

## package 구조

- ~~~json
  {
      "@nestjs/*" : "nestjs 구조",
      "reflect-metadata" :  "데코레이터 문법 관련 패키지",
      "rimraf" : "PC에서 리눅스 명령어 사용하는 패키지",
      "rxjs" : "비동기 프로그래밍 관련 패키지"
  }

  ~~~

## Controller

- 들어오는 <b>요청</b>을 처리하고 클라이언트에 <b>응답</b>을 반환한다.


### Routing

- @Controller() 에 사용합니다.