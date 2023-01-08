* 쇼핑몰 ESHOP 프로그램은 학습 참고용으로만 활용하시기 바랍니다. 본 프로그램의 무단 전재 및 배포를 금지합니다. 

1. 컴파일 실행 환경 = JAVA SDK 1.8, ORACLE 11g, TOMCAT 9.0 , eclipse IDE

2. 적용 기술 = Spring MVC, Mybatis, JAVA, JSP, HTML, CSS, BootStrap, Jquery(AJAX, JSON) , OracleDB

3-1. eclipse - File - import - Existing Projects into Workspace - ESHOP 임포트해 줌

3-2. Oracle11g에 권한 부여 : sqlplus SYSTEM/System1234 접속 후 다음의 eshop (비밀번호 : eshop) 계정을 생성해줌. 

CREATE USER eshop IDENTIFIED BY eshop;
GRANT CONNECT, RESOURCE TO eshop;
GRANT ALTER SESSION TO eshop;

show user

conn eshop/eshop

show user

select * from tab;

select count(*) from TB_com_user;

select count(*) from TB_PRODUCT;

4. 루트밑에 sql/eshop.sql파일의 쿼리들을 eshop/eshop 계정에 모두 commit 해야함
  (에러 쿼리의 경우, 4개의 빈 여백 공간을 없애줘야 함)

5-1. Tomcat server.xml 에 다음의 내용 추가 기재함

 <Connector URIEncoding="UTF-8" connectionTimeout="20000" port="8181" protocol="HTTP/1.1" redirectPort="8443"/>

  => 해당포트에 URIEncoding="UTF-8" 추가해주시기 바랍니다.

     인코딩문제로 한글이 파라미터로 넘어가지 않는 문제를 해결하기 위해서 입니다.

5-2. C:\Stationery\Stationery\WebContent\WEB-INF 폴더에 있는 dispatch-servlet 파일을 수정해 줌.

	 <bean id="dataSource"  class="org.apache.commons.dbcp.BasicDataSource"
	 			destroy-method="close"
	 			p:driverClassName="oracle.jdbc.driver.OracleDriver"
	 			p:url="jdbc:oracle:thin:@localhost:1521:orcl"
	 			p:username="eshop"
	 			p:password="eshop"
	 			p:maxActive="10" />

5-3. eclipse - Window - Preferences - Java - Installed JREs - jdk1.8.0_221 선택해줌

5-4. eclipse - Window - Preferences - Server - Runtime Environments 에서 Server runtime 톰캣 버전 맞춰줌(필요에 따라서 편집/제거/추가해 줌)

5-5. eclipse - Window - Preferences - Server - Runtime Environments 에서 Apache Tomcat V9.0 선택 - Edit - JRE: 에서 jdk1.8.0_221 선택해 줌.

5-6. eclipse - Window - Preferences - Web Services - Server and Runtime 에서 Server runtime 톰캣 버전 맞춰줌

5-7. eclipse - Window - Preferences - Maven - Server 에서 Tomcat v9.0 Server at localhost 선택해 줌

5-8. eclipse - Stationery Project 선택 후 마우스 우클릭 - Properties for Stationery 선택 - Java Build Path - Apache Tomcat v9.0 선택해 줌

5-9. Servers - Tomcat v9.0 Server at localhost-config - server.xml 에서 Context 2개 있는지 확인하고, 2개 있는면 1개는 지워줘야 함

6. 주소DB 확인 : 필요한 2개의 파일은 모두 생성(ESHOP/post/post.csv, post.ctl)

====================================================================================================================

      ex)cmd창에서 

      cd workspace/ESHOP/post 디렉토리로 이동한후

      sqlldr eshop/eshop control='post.ctl' data='post.csv' 명령어 실행


[오라클에 CSV 파일 넣기 참고 내용]

1. 오라클 우편번호 테이블 만들기

   다음의 우정사업본부 제공 우편번호부 파일 (엑셀변환방법 안내 사항은 우측에서 확인 가능함)

   https://www.epost.go.kr/search/zipcode/areacdAddressDown.jsp (2020년 2월 기준 우정사업본부 제공 개발자 사이트)

  1) 현재 ESHOP 프로그램에는 우편번호부 파일을 적용하였으나, 임의 삽입 주소 데이터에 대한 에러 유무 체크 필요함

     우편번호부 파일을 새로이 적용할 경우, "2)항목과 3)항목"을 참고해서 업데이트 합니다.


  2) 우정사업본부 고시파일을 내려받으면, 파일의 1열을 보면 필드명들이 적혀있는데 1열을 삭제합니다.

   ※zipcode를 DB로 입력할때 1열 필드명이 한글로 되어있어서

     seq칼럼에서 number 형식과 맞지 않아서 1개 오류가 날수 있습니다.


  3) 다른이름으로 저장

     파일명  : post

     파일형식: csv(쉼표분리)(*.csv) 로 저장 

   ※ 파일형식중에서 찾아보면 csv(쉼표분리)가 있습니다.

2. OracleDB 접속 테이블 생성

   create table post(zipcode char(7),
   sido varchar2(4),
   gugun varchar2(15),
   dong  varchar2(52),
   bunji varchar2(17),
   seq number(5));

3. 메모장에 다음을 처리합니다.

   load data
   infile 'post.csv'
   insert into table post
   FIELDS TERMINATED BY ','
   (zipcode,sido,gugun,dong,bunji,seq)

   파일형식: 모든파일 선택후 파일명을 post.ctl 로 파일 저장.

4. post.csv 파일과 post.ctl 파일을 한곳에 위치시킵니다.

5. 2개의 파일이 있는 폴더에서

   ex) 2개 파일을 C드라이브에 위치 시킨후 다음과 같이 처리하고,

       첨부 파일 안에  2개파일을 넣고 테이블생성후 로드해도 됩니다.

   C:\>sqlldr eshop/eshop control='post.ctl' data='post.csv'

             계정/비밀번호

====================================================================================================================

7. 문구점사이트 주요기능 및 기술

* 관리자(A) ID = admin, 관리자 Password = admin

* 그외 회원 가입(M) = 일반회원

  Test ID(1) / Password = ksy / ksy

  Test ID(2) / Password = shm / shm

1) 공통

- 로그인(ID찾기, 패스워드찾기) / 로그아웃
- 회원가입, 회원정보 수정
- 데이터 검색 및 페이징(BootStrap 테이블이용)
- 약50000건 정도의 우편번호 데이터 삽입 후, 모달페이지에서 동으로 검색

2) 사용자

- 제품구매(바로구매, 장바구니)
- 제품구매 후 주문서확인
- 제품구매 후 댓글등록 및 삭제(모바일 형식의 댓글 UI), 평점등록(별모양 UI 사용)
- 구매내역
- 장바구니(장바구니에서 바로구매 기능, 리스트 삭제기능)

3) 관리자

- 재고관리(새로운 제품 등록 및 수정)
- 매출통계(제품 카테고리별, 항목별 매출 통계)
- 재고현황(카테고리별 재고현황, 제품 판매현황 통계)

8. 이미지 경로.

   workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\\Stationery\userImg

   => 이미지는 서버에 업로드되어 있습니다.(refresh 문제 해결)

   => 로컬에서는 확인할 수 없습니다 (기존 샘플데이터는 확인가능함)

9. 공통스크립트 파일 = common.js (index.html 수정해서 실행)

10. Login

   1) 관리자(A) 접속 = 아이디 : admin, 비밀번호 : admin

   2) 일반유저 접속 = 아이디 : ksy, 비밀번호 : ksy

   3) 그외 TB_COM_USER 테이블에서 조회하여 접속하시면 됩니다.

   4) 샘플 유저정보 및 투표데이터는 SQL 쿼리파일에 있습니다.


11. 문구 쇼핑몰 프로그램 WebSite 주요기능 및 기술

   1) 공통

     ① 로그인(ID찾기, 패스워드찾기) / 로그아웃
    
     ② 회원가입, 회원정보 수정
  
     ③ 데이터 검색 및 페이징(BootStrap 테이블이용)
 
     ④ 약50000건 정도의 우편번호 데이터 삽입 후, 모달페이지에서 동으로 검색

   2) 사용자

     ① 제품구매(바로구매, 장바구니)

     ② 제품구매 후 주문서확인

     ③ 제품구매 후 댓글등록 및 삭제(모바일 형식의 댓글 UI), 평점등록(별모양 UI 사용)

     ④ 구매내역

     ⑤ 장바구니(장바구니에서 바로구매 기능, 리스트 삭제기능)

   3) 관리자

     ① 재고관리(새로운 제품 등록 및 수정)

     ② 매출통계(제품 카테고리별, 항목별 매출 통계)

     ③ 재고현황(카테고리별 재고현황, 제품 판매현황 통계)

12. 문구 쇼핑몰 프로그램 구조 Description

  1) 전체 프레임워크는 Spring이며, Tomcat, OracleDB 등을 사용합니다.

  2) JAVA (Controller, Service, ServiceImpl, Bean) + xml(mybatis)로 Set 구성
 
  3) 화면단은 JSP(BootStrap 이용)

  4) Sciprt는 jQuery 다수 적용

  5) 입력단 validation 체크 : 공통(common.js), 소스분석참고

    [입력단 validation은 화면마다 한줄처리로 가능하게 만들었음]

13. common.js(jquery구현) 주요기능

  1) 입력단 뒤로가기 버튼 방지

  2) 로그인체크

  3) validation자동체크(백그라운드에 애니메이션 효과(red))

  4) 입력단 필수값표시(required속성이용(HTML5)) 앞단에 빨간*표시

  5) 숫자 입력단에 숫자이외 타이핑 금지

14. 주요기술 

  1) 비동기 사진 업로드

  2) 비동기 JSON  처리
