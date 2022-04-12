package com.mywork.project.service;


import com.mywork.project.mapper.ProjectMapper;
import com.mywork.project.pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectMapper projectMapper;

//    @Autowired
//    private RestTemplate restTemplate;

//
//    @Override
//    public Page<Project> search(Map searchMap) {
//        //通用Mapper多条件搜索，标准写法
//        Example example = new Example(Project.class);//指定查询的表tb_Project
//        //1.初始化分页条件
//        int pageNum = 1;
//        int pageSize = 2;
//        if(searchMap != null){
//            Example.Criteria criteria = example.createCriteria();//创建查询条件
//            //时间区间
//            if(StringUtil.isNotEmpty((String) searchMap.get("startTime"))){
//                criteria.andGreaterThanOrEqualTo("createTime",searchMap.get("startTime"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("endTime"))){
//                criteria.andLessThanOrEqualTo("createTime",searchMap.get("endTime"));
//                criteria.andLessThanOrEqualTo("createTime",searchMap.get("endTime"));
//            }
//            //名称模糊搜索
//            if(StringUtil.isNotEmpty((String) searchMap.get("name"))){
//                criteria.andLike("name", "%"+(String) searchMap.get("name")+"%");
//            }
//            //分页
//            /*if(StringUtil.isNotEmpty((String) searchMap.get("pageNum"))){
//                pageNum = Integer.parseInt((String) searchMap.get("pageNum"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageSize"))){
//                pageSize = Integer.parseInt((String) searchMap.get("pageSize"));
//            }*/
//            if((Integer) searchMap.get("pageNum") !=null){
//                pageNum = (Integer) searchMap.get("pageNum");
//            }
//            if((Integer) searchMap.get("pageSize") !=null){
//                pageSize = (Integer) searchMap.get("pageSize");
//            }
//        }
//        PageHelper.startPage(pageNum,pageSize);//使用PageHelper插件完成分页
//        Page<Project> communities = (Page<Project>) projectMapper.selectByExample(example);
//        return communities;
//    }
//
    @Override
    public List<Project> findAll() {
        return projectMapper.selectAll();
    }
    @Override
    public Boolean add(Project project) {
        int row = projectMapper.insert(project);
        if(row>0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public Project findById(Integer id) {
        return projectMapper.selectByPrimaryKey(id);
    }

    @Override
    public Boolean update(Project project) {
        int row = projectMapper.updateByPrimaryKeySelective(project);
        if(row>0){
            return true;
        }else{
            return false;
        }
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
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            projectMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
