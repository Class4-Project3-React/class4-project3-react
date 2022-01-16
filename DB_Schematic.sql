★본인이 필요한 1)Table 명칭 + 2)sql 적을 것


> 김진경
    - table: user_inform
    - sql:
            CREATE TABLE user_inform
            (
                user_id VARCHAR(255) NOT NULL, 
                user_name VARCHAR(255) NOT NULL, 
                user_email VARCHAR(255) NOT NULL, 
                user_pw VARCHAR(255) NOT NULL, 
                PRIMARY KEY (user_id)
            );
            
            insert into user_inform (user_id, user_name, user_email, user_pw) value ('userId1', 'kjk', 'test@test.com', 'userPw1')

> 안성준
    - table: board
    - sql:
            CREATE TABLE `project3_react`.`board` (
                id INT NOT NULL AUTO_INCREMENT,
                `name` VARCHAR(200) NOT NULL,
                `title` VARCHAR(200) NOT NULL,
                `content` TEXT(500) NOT NULL,
                `image` VARCHAR(200),
                PRIMARY KEY (id))
                ENGINE = InnoDB
                DEFAULT CHARACTER SET = utf8
                COLLATE = utf8_bin;

            INSERT INTO board (id, name, title, content, image) VALUE ('25', '안성준', '아이유', '아이유', 'http://localhost:3000/upload/d9dbd43b-e8a7-4dad-90e0-5b895a0f7645.gif');

> 권원현
    - table: articles
    - sql:
            CREATE TABLE article
            (
                `no`            INT             NOT NULL    AUTO_INCREMENT, 
                `media`         VARCHAR(255)    NOT NULL, 
                `editor`        VARCHAR(255)    NOT NULL, 
                `date_article`  TIMESTAMP       NOT NULL, 
                `title`         VARCHAR(255)    NOT NULL, 
                `desc`          TEXT            NOT NULL, 
                `img`           VARCHAR(255)    NULL, 
                PRIMARY KEY (no)
            );

            INSERT INTO article (`no`, `media`, `editor`, `date_article`, `title`, `desc`, `img`) VALUE ('1', '매일경제', '권원현', '2022-01-12 17:08:22', '타이틀1', '내용1', 'leejung1');
            INSERT INTO article (`no`, `media`, `editor`, `date_article`, `title`, `desc`, `img`) VALUE ('2', '조선일보', '리정', '2022-01-12 17:08:09', '타이틀2', '내용2', 'leejung2');
            INSERT INTO article (`no`, `media`, `editor`, `date_article`, `title`, `desc`, `img`) VALUE ('3', '동아일보', '노제', '2022-01-12 17:07:46', '타이틀3', '내용3', 'leejung3');
    
    - table: comments
    - sql:
            CREATE TABLE comments
            (
                `no`            INT             NOT NULL    AUTO_INCREMENT, 
                `id`            VARCHAR(255)    NOT NULL, 
                `text`          VARCHAR(255)    NOT NULL, 
                `date_comment`  TIMESTAMP       NOT NULL, 
                `page`          VARCHAR(50)     NOT NULL, 
                `page_no`       INT             NULL, 
                PRIMARY KEY (no)
            );

            ALTER TABLE comments
                ADD CONSTRAINT FK_comments_page_no_article_no FOREIGN KEY (page_no)
                    REFERENCES article (no) ON DELETE RESTRICT ON UPDATE RESTRICT;

            INSERT INTO comments (`no`, `id`, `text`, `date_comment`, `page`, `page_no`) VALUE ('1', 'null', '첫 댓글', '2022-01-12 17:08:22', 'Contents', '1');
            INSERT INTO comments (`no`, `id`, `text`, `date_comment`, `page`, `page_no`) VALUE ('2', 'null', '첫 댓글', '2022-01-12 17:08:22', 'Contents', '2');
            INSERT INTO comments (`no`, `id`, `text`, `date_comment`, `page`, `page_no`) VALUE ('3', 'null', '첫 댓글', '2022-01-12 17:08:22', 'Contents', '3');

> 김재원
    - table: mypage_profile
    - sql:
            CREATE TABLE mypage_profile (
                    id INT(50) AUTO_INCREMENT,
                    name VARCHAR(255) NOT NULL, 
                    profile VARCHAR(255) NOT NULL,
                    favorite VARCHAR(255) NOT NULL, 
                    PRIMARY KEY (id)
                );

            INSERT INTO mypage_profile (name, profile, favorite) VALUE ('Jaewonee', 'wowoooo', 'conding');

    - table: mypage_todo
    - sql:
            CREATE TABLE mypage_todo (
                id INT(50) AUTO_INCREMENT,
                title VARCHAR(255) NOT NULL, 
                contents VARCHAR(255) NOT NULL, 
                PRIMARY KEY (id)
            );

            INSERT INTO mypage_todo (title, contents) VALUE ('Todo', 'hard work!!');