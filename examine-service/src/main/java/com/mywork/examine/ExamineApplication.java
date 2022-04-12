package com.mywork.examine;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan(basePackages = "com.mywork.examine.mapper")
public class ExamineApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExamineApplication.class, args);
    }
//    @Bean
//    @LoadBalanced
//    public RestTemplate restTemplate() {
//        return new RestTemplate();
//    }
}
