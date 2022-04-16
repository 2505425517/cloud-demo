package com.mywork.view.service;


import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.pojo.Message;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.nio.charset.Charset;
import java.util.List;
import java.util.Map;

@Repository
@Service
public class MessageServiceImpl implements MessageService {

    public static RestTemplate getInstance(String charset) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(new StringHttpMessageConverter(Charset.forName(charset)));
        return restTemplate;
    }
    private static RestTemplate restTemplate;
    @Resource
    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public PageResult search(Map searchMap) {
        //1.远程查询
        String url = "http://messageservice/message/search/" ;
        PageResult page =  restTemplate.postForObject(url, searchMap ,PageResult.class);
        System.out.println(page);
        return page;
    }

    @Override
    public Result findAll() {
        String url = "http://messageservice/message/find" ;
        Result page =  restTemplate.getForObject(url , Result.class);
        System.out.println(page);
        return page;
    }
    @Override
    public Result add(Message message) {
        String url = "http://messageservice/message/add/" ;
        Result page =  restTemplate.postForObject(url, message ,Result.class);
        return page;
    }

    @Override
    public Result findByUserId(Integer userid) {
        String url = "http://messageservice/message/findById/"+userid;
        Result page =  restTemplate.getForObject(url, Result.class);
        return page;
    }

    @Override
    public Result update(Message message) {
        String url = "http://messageservice/message/update/" ;
        Result page =  restTemplate.postForObject(url, message ,Result.class);
        return page;
    }
//
//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        Project Project = new Project();
//        Project.setId(id);
//        Project.setStatus(status);
//        int row = messageMapper.updateByPrimaryKeySelective(Project);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }

    @Override
    public Result del(List<Integer> ids) {
        String url = "http://messageservice/message/del/" ;
        Result page =  restTemplate.postForObject(url, ids ,Result.class);
        return page;
    }

}
