* BOARDMS 로그인_회원가입_공지사항 프로그램은 학습 참고용으로만 활용하시기 바랍니다. 본 프로그램의 무단 전재 및 배포를 금지합니다. 

1. 컴파일 실행 환경 = JAVA SDK 1.6, ORACLE 11g, TOMCAT 9.0 , eclipse IDE

2. 적용 기술 = Spring MVC, Mybatis, JAVA, JSP, HTML, CSS, BootStrap, Jquery(AJAX, JSON) , OracleDB

3-1. eclipse - File - import - Existing Projects into Workspace - Stationery 및 Servers 임포트해줌.

3-2. Oracle11g에 권한 부여 : sqlplus SYSTEM/System1234 접속 후 다음의 boardms (비밀번호 : boardms) 계정을 생성해줌. 

CREATE USER boardms IDENTIFIED BY boardms;
GRANT CONNECT, RESOURCE TO boardms;
GRANT ALTER SESSION TO boardms;

show user

conn boardms/boardms

show user

select * from tab;

select count(*) from TB_com_user;


4-1) 루트밑에 sql/boardms.sql파일의 쿼리들을 boardms/boardms 계정에 모두 commit 해야함
     (에러 쿼리의 경우, 4개의 빈 여백 공간을 없애줘야 함)

4-2) 프로그램 실행 시 Main 화면에 PLANNER >> , SHARE >> 는 무시하시기 바랍니다.

4-3) 모바일 웹에서 실행 시 404 에러 나타날 경우, Servers - Tomcat v9.0... 더블 클릭! - Modules 클릭

      - 우측 "Edit.." 버튼 클릭! - Path:를 / 로 변경 후 OK 버튼 클릭! 재실행 해보시기 바랍니다.

=========================================================================

※ PC에서는 웹페이지 접속이 되는데, 스마트폰에서 웹페이지 접속이 안될 경우 문제 해결 방법

1. Windows IIS 웹서버(또는 다른 웹서버)가 구동되고 있을 경우,
   Apache Tomcat 웹서버와 충돌 문제가 있을 수 있기에,
   다른 웹서버(예시 : inetmgr 실행해서 Windows IIS 웹서버)는 끄시기 바랍니다.

2. 스마트폰에서 Chrome 브라우저 실행하고, 설정에서 인터넷 쿠키/사용기록 등을 지우고
   실행해서 확인해 보시기 바랍니다.

3. PC 에서 윈도우즈10 네트워크 포트 열기
   : 우선, 윈도우즈키 + R - firewall.cpl - Windows Defender 방화벽 설정 또는 해제 - 개인 네트워크 설정(Windows Defender 방화벽 사용 안 함) 체크,

     공용 네트워크 설정((Windows Defender 방화벽 사용 안 함) 체크해서, 방화벽을 내린 후에, 모바일 웹 사이트 실행 확인해 해 봅니다.

   [방화벽을 내린 후에 모바일 웹 사이트가 구동될 경우, 방화벽을 다시 올리고 다음과 같이 포트들을 오픈해 줍니다]

   1) 윈도우즈키 + R - firewall.cpl - 좌측 중앙 "고급 설정" 클릭!

   2) 좌측편 "인바운드 규칙" - "새 규칙..." 클릭 - "포트" 선택 - "다음" 클릭 - TCP 선택 확인

   - "특정 로컬 포트" 입력(예시 : 9001, 1521 등) - "다음" 클릭 - "연결 허용" 선택 확인 - "다음" 클릭

   - 체크 박스 "도메인, 개인, 공용" 체크 확인 - "다음" 클릭 - "이름"란에 알맞은 이름 기재함 - "마침" 클릭

   3) 좌측편 "아웃바운드 규칙" - "새 규칙..." 클릭 - "포트" 선택 - "다음" 클릭 - TCP 선택 확인

   - "특정 로컬 포트" 입력(예시 : 9001, 1521 등) - "다음" 클릭 - "연결 허용" 선택 확인 - "다음" 클릭

   - 체크 박스 "도메인, 개인, 공용" 체크 확인 - "다음" 클릭 - "이름"란에 알맞은 이름 기재함 - "마침" 클릭

   4) 네트워크 재시작(그래도 안될 경우, 윈도우 재부팅)

   5) 스마트폰 웹페이지 접속 실행 확인

=========================================================================


5-1. \WEB-INF 폴더에 있는 dispatch-servlet 파일을 수정해 줌.

	 <bean id="dataSource"  class="org.apache.commons.dbcp.BasicDataSource"
	 			destroy-method="close"
	 			p:driverClassName="oracle.jdbc.driver.OracleDriver"
	 			p:url="jdbc:oracle:thin:@localhost:1521:orcl"
	 			p:username="boardms"
	 			p:password="boardms"
	 			p:maxActive="10" />

5-2. eclipse - Window - Preferences - Java - Installed JREs - jdk1.8.0_221 선택해줌

5-3. eclipse - Window - Preferences - Server - Runtime Environments 에서 Server runtime 톰캣 버전 맞춰줌(필요에 따라서 편집/제거/추가해 줌)

5-4. eclipse - Window - Preferences - Server - Runtime Environments 에서 Apache Tomcat V9.0 선택 - Edit - JRE: 에서 jdk1.8.0_221 선택해 줌.

5-5. eclipse - Window - Preferences - Web Services - Server and Runtime 에서 Server runtime 톰캣 버전 맞춰줌

5-6. eclipse - Window - Preferences - Maven - Server 에서 Tomcat v9.0 Server at localhost 선택해 줌

5-7. eclipse - board Project 선택 후 마우스 우클릭 - Properties for board 선택 - Java Build Path - Apache Tomcat v9.0 선택해 줌

5-8. Servers - Tomcat v9.0 Server at localhost-config - server.xml 에서 Context 2개 있는지 확인하고, 2개 있는면 1개는 지워줘야 함

====================================================================================================================

6. BOARDMS 프로그램 기능 설명

[웹프로젝트_로그인_회원가입_공지사항]Spring MVC(OracleDB), MyBatis, JAVA, JSP, HTML, CSS, BOOTSTRAP, Jquery(Ajax,JSON)

* 기능 : 회원가입/로그인

1) 관리자(A) ID / Password = admin / admin
   = 권한 : 공지사항 글올리기, 수정/삭제 가능함

2) 일반유저(M) 초기 테스트용 ID / Password = user / user
   = 권한 : 공지 사항 조회만 가능함

7. 공통스크립트 파일 = common.js (index.html 수정해서 실행)

8. Login

   1) 관리자(A) 접속 = 아이디 : admin, 비밀번호 : admin

   2) 일반유저 접속(Login - Sign Up 회원 가입 바람) = 아이디 : 회원가입 아이디, 비밀번호 : 회원가입 비밀번호

   3) 그외 TB_COM_USER 테이블에서 조회하여 접속하시면 됩니다.

9. common.js(jquery구현) 주요기능

  1) 입력단 뒤로가기 버튼 방지

  2) 로그인체크

  3) validation자동체크(백그라운드에 애니메이션 효과(red))

  4) 입력단 필수값표시(required속성이용(HTML5)) 앞단에 빨간*표시

  5) 숫자 입력단에 숫자이외 타이핑 금지

10. 주요기술 

   1) Spring MVC(OracleDB 연동)

   2) 비동기 JSON  처리

