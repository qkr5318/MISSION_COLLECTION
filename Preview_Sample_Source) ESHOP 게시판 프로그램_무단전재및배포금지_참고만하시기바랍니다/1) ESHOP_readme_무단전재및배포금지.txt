* ���θ� ESHOP ���α׷��� �н� ��������θ� Ȱ���Ͻñ� �ٶ��ϴ�. �� ���α׷��� ���� ���� �� ������ �����մϴ�. 

1. ������ ���� ȯ�� = JAVA SDK 1.8, ORACLE 11g, TOMCAT 9.0 , eclipse IDE

2. ���� ��� = Spring MVC, Mybatis, JAVA, JSP, HTML, CSS, BootStrap, Jquery(AJAX, JSON) , OracleDB

3-1. eclipse - File - import - Existing Projects into Workspace - ESHOP ����Ʈ�� ��

3-2. Oracle11g�� ���� �ο� : sqlplus SYSTEM/System1234 ���� �� ������ eshop (��й�ȣ : eshop) ������ ��������. 

CREATE USER eshop IDENTIFIED BY eshop;
GRANT CONNECT, RESOURCE TO eshop;
GRANT ALTER SESSION TO eshop;

show user

conn eshop/eshop

show user

select * from tab;

select count(*) from TB_com_user;

select count(*) from TB_PRODUCT;

4. ��Ʈ�ؿ� sql/eshop.sql������ �������� eshop/eshop ������ ��� commit �ؾ���
  (���� ������ ���, 4���� �� ���� ������ ������� ��)

5-1. Tomcat server.xml �� ������ ���� �߰� ������

 <Connector URIEncoding="UTF-8" connectionTimeout="20000" port="8181" protocol="HTTP/1.1" redirectPort="8443"/>

  => �ش���Ʈ�� URIEncoding="UTF-8" �߰����ֽñ� �ٶ��ϴ�.

     ���ڵ������� �ѱ��� �Ķ���ͷ� �Ѿ�� �ʴ� ������ �ذ��ϱ� ���ؼ� �Դϴ�.

5-2. C:\Stationery\Stationery\WebContent\WEB-INF ������ �ִ� dispatch-servlet ������ ������ ��.

	 <bean id="dataSource"  class="org.apache.commons.dbcp.BasicDataSource"
	 			destroy-method="close"
	 			p:driverClassName="oracle.jdbc.driver.OracleDriver"
	 			p:url="jdbc:oracle:thin:@localhost:1521:orcl"
	 			p:username="eshop"
	 			p:password="eshop"
	 			p:maxActive="10" />

5-3. eclipse - Window - Preferences - Java - Installed JREs - jdk1.8.0_221 ��������

5-4. eclipse - Window - Preferences - Server - Runtime Environments ���� Server runtime ��Ĺ ���� ������(�ʿ信 ���� ����/����/�߰��� ��)

5-5. eclipse - Window - Preferences - Server - Runtime Environments ���� Apache Tomcat V9.0 ���� - Edit - JRE: ���� jdk1.8.0_221 ������ ��.

5-6. eclipse - Window - Preferences - Web Services - Server and Runtime ���� Server runtime ��Ĺ ���� ������

5-7. eclipse - Window - Preferences - Maven - Server ���� Tomcat v9.0 Server at localhost ������ ��

5-8. eclipse - Stationery Project ���� �� ���콺 ��Ŭ�� - Properties for Stationery ���� - Java Build Path - Apache Tomcat v9.0 ������ ��

5-9. Servers - Tomcat v9.0 Server at localhost-config - server.xml ���� Context 2�� �ִ��� Ȯ���ϰ�, 2�� �ִ¸� 1���� ������� ��

6. �ּ�DB Ȯ�� : �ʿ��� 2���� ������ ��� ����(ESHOP/post/post.csv, post.ctl)

====================================================================================================================

      ex)cmdâ���� 

      cd workspace/ESHOP/post ���丮�� �̵�����

      sqlldr eshop/eshop control='post.ctl' data='post.csv' ��ɾ� ����


[����Ŭ�� CSV ���� �ֱ� ���� ����]

1. ����Ŭ �����ȣ ���̺� �����

   ������ ����������� ���� �����ȣ�� ���� (������ȯ��� �ȳ� ������ �������� Ȯ�� ������)

   https://www.epost.go.kr/search/zipcode/areacdAddressDown.jsp (2020�� 2�� ���� ����������� ���� ������ ����Ʈ)

  1) ���� ESHOP ���α׷����� �����ȣ�� ������ �����Ͽ�����, ���� ���� �ּ� �����Ϳ� ���� ���� ���� üũ �ʿ���

     �����ȣ�� ������ ������ ������ ���, "2)�׸�� 3)�׸�"�� �����ؼ� ������Ʈ �մϴ�.


  2) ����������� ��������� ����������, ������ 1���� ���� �ʵ����� �����ִµ� 1���� �����մϴ�.

   ��zipcode�� DB�� �Է��Ҷ� 1�� �ʵ���� �ѱ۷� �Ǿ��־

     seqĮ������ number ���İ� ���� �ʾƼ� 1�� ������ ���� �ֽ��ϴ�.


  3) �ٸ��̸����� ����

     ���ϸ�  : post

     ��������: csv(��ǥ�и�)(*.csv) �� ���� 

   �� ���������߿��� ã�ƺ��� csv(��ǥ�и�)�� �ֽ��ϴ�.

2. OracleDB ���� ���̺� ����

   create table post(zipcode char(7),
   sido varchar2(4),
   gugun varchar2(15),
   dong  varchar2(52),
   bunji varchar2(17),
   seq number(5));

3. �޸��忡 ������ ó���մϴ�.

   load data
   infile 'post.csv'
   insert into table post
   FIELDS TERMINATED BY ','
   (zipcode,sido,gugun,dong,bunji,seq)

   ��������: ������� ������ ���ϸ��� post.ctl �� ���� ����.

4. post.csv ���ϰ� post.ctl ������ �Ѱ��� ��ġ��ŵ�ϴ�.

5. 2���� ������ �ִ� ��������

   ex) 2�� ������ C����̺꿡 ��ġ ��Ų�� ������ ���� ó���ϰ�,

       ÷�� ���� �ȿ�  2�������� �ְ� ���̺������ �ε��ص� �˴ϴ�.

   C:\>sqlldr eshop/eshop control='post.ctl' data='post.csv'

             ����/��й�ȣ

====================================================================================================================

7. ����������Ʈ �ֿ��� �� ���

* ������(A) ID = admin, ������ Password = admin

* �׿� ȸ�� ����(M) = �Ϲ�ȸ��

  Test ID(1) / Password = ksy / ksy

  Test ID(2) / Password = shm / shm

1) ����

- �α���(IDã��, �н�����ã��) / �α׾ƿ�
- ȸ������, ȸ������ ����
- ������ �˻� �� ����¡(BootStrap ���̺��̿�)
- ��50000�� ������ �����ȣ ������ ���� ��, ������������� ������ �˻�

2) �����

- ��ǰ����(�ٷα���, ��ٱ���)
- ��ǰ���� �� �ֹ���Ȯ��
- ��ǰ���� �� ��۵�� �� ����(����� ������ ��� UI), �������(����� UI ���)
- ���ų���
- ��ٱ���(��ٱ��Ͽ��� �ٷα��� ���, ����Ʈ �������)

3) ������

- ������(���ο� ��ǰ ��� �� ����)
- �������(��ǰ ī�װ���, �׸� ���� ���)
- �����Ȳ(ī�װ��� �����Ȳ, ��ǰ �Ǹ���Ȳ ���)

8. �̹��� ���.

   workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\\Stationery\userImg

   => �̹����� ������ ���ε�Ǿ� �ֽ��ϴ�.(refresh ���� �ذ�)

   => ���ÿ����� Ȯ���� �� �����ϴ� (���� ���õ����ʹ� Ȯ�ΰ�����)

9. ���뽺ũ��Ʈ ���� = common.js (index.html �����ؼ� ����)

10. Login

   1) ������(A) ���� = ���̵� : admin, ��й�ȣ : admin

   2) �Ϲ����� ���� = ���̵� : ksy, ��й�ȣ : ksy

   3) �׿� TB_COM_USER ���̺��� ��ȸ�Ͽ� �����Ͻø� �˴ϴ�.

   4) ���� �������� �� ��ǥ�����ʹ� SQL �������Ͽ� �ֽ��ϴ�.


11. ���� ���θ� ���α׷� WebSite �ֿ��� �� ���

   1) ����

     �� �α���(IDã��, �н�����ã��) / �α׾ƿ�
    
     �� ȸ������, ȸ������ ����
  
     �� ������ �˻� �� ����¡(BootStrap ���̺��̿�)
 
     �� ��50000�� ������ �����ȣ ������ ���� ��, ������������� ������ �˻�

   2) �����

     �� ��ǰ����(�ٷα���, ��ٱ���)

     �� ��ǰ���� �� �ֹ���Ȯ��

     �� ��ǰ���� �� ��۵�� �� ����(����� ������ ��� UI), �������(����� UI ���)

     �� ���ų���

     �� ��ٱ���(��ٱ��Ͽ��� �ٷα��� ���, ����Ʈ �������)

   3) ������

     �� ������(���ο� ��ǰ ��� �� ����)

     �� �������(��ǰ ī�װ���, �׸� ���� ���)

     �� �����Ȳ(ī�װ��� �����Ȳ, ��ǰ �Ǹ���Ȳ ���)

12. ���� ���θ� ���α׷� ���� Description

  1) ��ü �����ӿ�ũ�� Spring�̸�, Tomcat, OracleDB ���� ����մϴ�.

  2) JAVA (Controller, Service, ServiceImpl, Bean) + xml(mybatis)�� Set ����
 
  3) ȭ����� JSP(BootStrap �̿�)

  4) Sciprt�� jQuery �ټ� ����

  5) �Է´� validation üũ : ����(common.js), �ҽ��м�����

    [�Է´� validation�� ȭ�鸶�� ����ó���� �����ϰ� �������]

13. common.js(jquery����) �ֿ���

  1) �Է´� �ڷΰ��� ��ư ����

  2) �α���üũ

  3) validation�ڵ�üũ(��׶��忡 �ִϸ��̼� ȿ��(red))

  4) �Է´� �ʼ���ǥ��(required�Ӽ��̿�(HTML5)) �մܿ� ����*ǥ��

  5) ���� �Է´ܿ� �����̿� Ÿ���� ����

14. �ֿ��� 

  1) �񵿱� ���� ���ε�

  2) �񵿱� JSON  ó��
