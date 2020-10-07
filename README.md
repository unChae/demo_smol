# demo smol project

- language
    - nodejs

- modules
    - 서버 실행
        - nodemon -g
        - express
        - express-session
    - 서버 환경
        - cors
        - dotenv
        - body-parser
    - 데이터베이스
        - sequelize
        - mysql2
    - jwt 토큰
        - bcrypt
        - jsonwebtoken
    - 백업, storage 관련
        - aws-sdk
        - request
    
- **코드 작성 요청 사항**
    - , 뒤에는 띄어쓰기
    - = 의 앞 뒤에는 한칸씩 사이 두기
    - 데이터베이스 find 할 때 raw:true 붙여주기
    - 상단에 require 작성 시 주석으로 묶어주기
    - 데이터베이스 접근시 catch 꼭 걸어주기
    - 항상 코드 한 줄 끝에 ; 붙여주기
    - 최대한 변수 선언은 let, 상수일 경우 const, 전역변수 활용일 경우에 let대신 var
    - }else{ else 앞뒤로 {} 붙여주기
    
##### 2020.09.05

- init project
- connect to domain "unchae.com"
- ssl
- print hello world

##### 2020.09.06

- 액세스 토큰 가져오는 작업 중

##### 2020.10.06 write by he_deok

- express-session
- login reduplication prevent
- random number session
- certification number certify

##### 2020.10.07 write by un_chae

- 코드 정리
    - num_certification -> number_certification
    - 테스트 코드 작성된 주석 제거
    - util -> sms.js 
        - number 변수 추가
        - get_number 함수추가
        - send_sms return 제거
    - console.log와 response반환 메시지 통일
    - number_certification 변수 이름 수정


