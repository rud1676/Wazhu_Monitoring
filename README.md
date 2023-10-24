# Wazhu를 사용한 모니터링 감지.

## Wazhu 설치(feat.Docker)

- docker(v2.12.2)
- git clone https://github.com/wazuh/wazuh-docker.git -b v4.5.3

1. single-node폴더에 generate-indexer-certs.yml 아래의 두줄을 삽입한다.

```yml
environment:
  - HTTP_PROXY=YOUR_PROXY_ADDRESS_OR_DNS
```

2. docker-compose -f generate-indexer-certs.yml run --rm generator 명령을 실행

> > 아마 root-ca-manager는 실패했다고 나옴. 상관없이 넘어감

3. docker-compose.yml파일을 수정한다.

   -root-ca-manager를 사용하는 부분을 찾아 root-ca로 줄여준다.

4. 그리고 나서 배포한다.(docker-compose up -d)

5. https://IP:443으로 접속해 확인한다.

## Cors 정책 설정
