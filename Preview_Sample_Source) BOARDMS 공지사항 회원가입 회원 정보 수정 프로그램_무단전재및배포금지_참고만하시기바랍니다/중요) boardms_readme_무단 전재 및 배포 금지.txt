* BOARDMS �α���_ȸ������_�������� ���α׷��� �н� ��������θ� Ȱ���Ͻñ� �ٶ��ϴ�. �� ���α׷��� ���� ���� �� ������ �����մϴ�. 

1. ������ ���� ȯ�� = JAVA SDK 1.6, ORACLE 11g, TOMCAT 9.0 , eclipse IDE

2. ���� ��� = Spring MVC, Mybatis, JAVA, JSP, HTML, CSS, BootStrap, Jquery(AJAX, JSON) , OracleDB

3-1. eclipse - File - import - Existing Projects into Workspace - Stationery �� Servers ����Ʈ����.

3-2. Oracle11g�� ���� �ο� : sqlplus SYSTEM/System1234 ���� �� ������ boardms (��й�ȣ : boardms) ������ ��������. 

CREATE USER boardms IDENTIFIED BY boardms;
GRANT CONNECT, RESOURCE TO boardms;
GRANT ALTER SESSION TO boardms;

show user

conn boardms/boardms

show user

select * from tab;

select count(*) from TB_com_user;


4-1) ��Ʈ�ؿ� sql/boardms.sql������ �������� boardms/boardms ������ ��� commit �ؾ���
     (���� ������ ���, 4���� �� ���� ������ ������� ��)

4-2) ���α׷� ���� �� Main ȭ�鿡 PLANNER >> , SHARE >> �� �����Ͻñ� �ٶ��ϴ�.

4-3) ����� ������ ���� �� 404 ���� ��Ÿ�� ���, Servers - Tomcat v9.0... ���� Ŭ��! - Modules Ŭ��

      - ���� "Edit.." ��ư Ŭ��! - Path:�� / �� ���� �� OK ��ư Ŭ��! ����� �غ��ñ� �ٶ��ϴ�.

=========================================================================

�� PC������ �������� ������ �Ǵµ�, ����Ʈ������ �������� ������ �ȵ� ��� ���� �ذ� ���

1. Windows IIS ������(�Ǵ� �ٸ� ������)�� �����ǰ� ���� ���,
   Apache Tomcat �������� �浹 ������ ���� �� �ֱ⿡,
   �ٸ� ������(���� : inetmgr �����ؼ� Windows IIS ������)�� ���ñ� �ٶ��ϴ�.

2. ����Ʈ������ Chrome ������ �����ϰ�, �������� ���ͳ� ��Ű/����� ���� �����
   �����ؼ� Ȯ���� ���ñ� �ٶ��ϴ�.

3. PC ���� ��������10 ��Ʈ��ũ ��Ʈ ����
   : �켱, ��������Ű + R - firewall.cpl - Windows Defender ��ȭ�� ���� �Ǵ� ���� - ���� ��Ʈ��ũ ����(Windows Defender ��ȭ�� ��� �� ��) üũ,

     ���� ��Ʈ��ũ ����((Windows Defender ��ȭ�� ��� �� ��) üũ�ؼ�, ��ȭ���� ���� �Ŀ�, ����� �� ����Ʈ ���� Ȯ���� �� ���ϴ�.

   [��ȭ���� ���� �Ŀ� ����� �� ����Ʈ�� ������ ���, ��ȭ���� �ٽ� �ø��� ������ ���� ��Ʈ���� ������ �ݴϴ�]

   1) ��������Ű + R - firewall.cpl - ���� �߾� "��� ����" Ŭ��!

   2) ������ "�ιٿ�� ��Ģ" - "�� ��Ģ..." Ŭ�� - "��Ʈ" ���� - "����" Ŭ�� - TCP ���� Ȯ��

   - "Ư�� ���� ��Ʈ" �Է�(���� : 9001, 1521 ��) - "����" Ŭ�� - "���� ���" ���� Ȯ�� - "����" Ŭ��

   - üũ �ڽ� "������, ����, ����" üũ Ȯ�� - "����" Ŭ�� - "�̸�"���� �˸��� �̸� ������ - "��ħ" Ŭ��

   3) ������ "�ƿ��ٿ�� ��Ģ" - "�� ��Ģ..." Ŭ�� - "��Ʈ" ���� - "����" Ŭ�� - TCP ���� Ȯ��

   - "Ư�� ���� ��Ʈ" �Է�(���� : 9001, 1521 ��) - "����" Ŭ�� - "���� ���" ���� Ȯ�� - "����" Ŭ��

   - üũ �ڽ� "������, ����, ����" üũ Ȯ�� - "����" Ŭ�� - "�̸�"���� �˸��� �̸� ������ - "��ħ" Ŭ��

   4) ��Ʈ��ũ �����(�׷��� �ȵ� ���, ������ �����)

   5) ����Ʈ�� �������� ���� ���� Ȯ��

=========================================================================


5-1. \WEB-INF ������ �ִ� dispatch-servlet ������ ������ ��.

	 <bean id="dataSource"  class="org.apache.commons.dbcp.BasicDataSource"
	 			destroy-method="close"
	 			p:driverClassName="oracle.jdbc.driver.OracleDriver"
	 			p:url="jdbc:oracle:thin:@localhost:1521:orcl"
	 			p:username="boardms"
	 			p:password="boardms"
	 			p:maxActive="10" />

5-2. eclipse - Window - Preferences - Java - Installed JREs - jdk1.8.0_221 ��������

5-3. eclipse - Window - Preferences - Server - Runtime Environments ���� Server runtime ��Ĺ ���� ������(�ʿ信 ���� ����/����/�߰��� ��)

5-4. eclipse - Window - Preferences - Server - Runtime Environments ���� Apache Tomcat V9.0 ���� - Edit - JRE: ���� jdk1.8.0_221 ������ ��.

5-5. eclipse - Window - Preferences - Web Services - Server and Runtime ���� Server runtime ��Ĺ ���� ������

5-6. eclipse - Window - Preferences - Maven - Server ���� Tomcat v9.0 Server at localhost ������ ��

5-7. eclipse - board Project ���� �� ���콺 ��Ŭ�� - Properties for board ���� - Java Build Path - Apache Tomcat v9.0 ������ ��

5-8. Servers - Tomcat v9.0 Server at localhost-config - server.xml ���� Context 2�� �ִ��� Ȯ���ϰ�, 2�� �ִ¸� 1���� ������� ��

====================================================================================================================

6. BOARDMS ���α׷� ��� ����

[��������Ʈ_�α���_ȸ������_��������]Spring MVC(OracleDB), MyBatis, JAVA, JSP, HTML, CSS, BOOTSTRAP, Jquery(Ajax,JSON)

* ��� : ȸ������/�α���

1) ������(A) ID / Password = admin / admin
   = ���� : �������� �ۿø���, ����/���� ������

2) �Ϲ�����(M) �ʱ� �׽�Ʈ�� ID / Password = user / user
   = ���� : ���� ���� ��ȸ�� ������

7. ���뽺ũ��Ʈ ���� = common.js (index.html �����ؼ� ����)

8. Login

   1) ������(A) ���� = ���̵� : admin, ��й�ȣ : admin

   2) �Ϲ����� ����(Login - Sign Up ȸ�� ���� �ٶ�) = ���̵� : ȸ������ ���̵�, ��й�ȣ : ȸ������ ��й�ȣ

   3) �׿� TB_COM_USER ���̺��� ��ȸ�Ͽ� �����Ͻø� �˴ϴ�.

9. common.js(jquery����) �ֿ���

  1) �Է´� �ڷΰ��� ��ư ����

  2) �α���üũ

  3) validation�ڵ�üũ(��׶��忡 �ִϸ��̼� ȿ��(red))

  4) �Է´� �ʼ���ǥ��(required�Ӽ��̿�(HTML5)) �մܿ� ����*ǥ��

  5) ���� �Է´ܿ� �����̿� Ÿ���� ����

10. �ֿ��� 

   1) Spring MVC(OracleDB ����)

   2) �񵿱� JSON  ó��

