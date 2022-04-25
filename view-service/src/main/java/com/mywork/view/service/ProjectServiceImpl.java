package com.mywork.view.service;



import com.mywork.view.common.Result;
import com.mywork.view.pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Repository
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Result findAll() {
        //1.远程查询
        String url = "http://projectservice/project/findall/";
        Result page =  restTemplate.getForObject(url , Result.class);
        System.out.println(page);
        return page;
    }
    @Override
    public Result findById(Integer id) {
        //1.远程查询
        String url = "http://projectservice/project/findById/"+id;
        Result page =  restTemplate.getForObject(url , Result.class);
        System.out.println(page);
        return page;
    }
    @Override
    public Result add(Project project) {
        String url = "http://projectservice/project/add/" ;
        Result page =  restTemplate.postForObject(url, project ,Result.class);
        return page;
    }

    @Override
    public Result update(Project project) {
        String url = "http://projectservice/project/update/" ;
        Result page =  restTemplate.postForObject(url, project ,Result.class);
        return page;
    }
//
//    @Override
//    public Boolean updateStatus(String status, Integer id) {
//        Project Project = new Project();
//        Project.setId(id);
//        Project.setStatus(status);
//        int row = projectMapper.updateByPrimaryKeySelective(Project);
//        if(row>0){
//            return true;
//        }else{
//            return false;
//        }
//    }

    @Override
    public Result del(List<Integer> ids) {
        String url = "http://projectservice/project/del/" ;
        Result page =  restTemplate.postForObject(url, ids ,Result.class);
        return page;
    }

}
