package com.mywork.project.service;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.util.StringUtil;
import com.mywork.project.common.Result;
import com.mywork.project.mapper.ProjectMapper;
import com.mywork.project.pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ProjectMapper projectMapper;

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
    public Page<Project> search(Map searchMap) {
        //通用Mapper多条件搜索，标准写法
        Example example = new Example(Project.class);//指定查询的表tb_Project
        //1.初始化分页条件
        int pageNum = 1;
        int pageSize = 5;
        if(searchMap != null){
            Example.Criteria criteria = example.createCriteria();//创建查询条件
            //时间区间
            if(StringUtil.isNotEmpty((String) searchMap.get("startTime"))){
                criteria.andGreaterThanOrEqualTo("projectStarttime",searchMap.get("startTime"));
            }
            if(StringUtil.isNotEmpty((String) searchMap.get("endTime"))){
                criteria.andLessThanOrEqualTo("projectEndtime",searchMap.get("endTime"));
            }
            //名称模糊搜索
            if(StringUtil.isNotEmpty((String) searchMap.get("data"))){
                criteria.andLike("projectName", "%"+(String) searchMap.get("data")+"%");
            }
            if(StringUtil.isNotEmpty(searchMap.get("userid").toString())){
                criteria.andLike("userid", (String) (searchMap.get("userid").toString()));
            }
            if(StringUtil.isNotEmpty(searchMap.get("status").toString())){
                if (searchMap.get("status").toString().equals("0")){
                    criteria.andEqualTo("projectStatus", 0);
                }
                else if (searchMap.get("status").toString().equals("1")){
                    criteria.andEqualTo("projectStatus", 1);
                }
                else if (searchMap.get("status").toString().equals("2")){
                    criteria.andEqualTo("projectStatus", 2);
                }
                else if (searchMap.get("status").toString().equals("3")){
                    criteria.andEqualTo("projectStatus", 3);
                }
            }
//            if(searchMap.get("status").equals(true)){
//                System.out.println(searchMap.get("status"));
//                if (searchMap.get("status").equals(true)){
//                    criteria.andEqualTo("projectStatus", (Integer)0 );
//                }
//            }

            //分页
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageNum"))){
//                pageNum = Integer.parseInt((String) searchMap.get("pageNum"));
//            }
//            if(StringUtil.isNotEmpty((String) searchMap.get("pageSize"))){
//                pageSize = Integer.parseInt((String) searchMap.get("pageSize"));
//            }
            if((Integer) searchMap.get("pageNum") !=null){
                pageNum = (Integer) searchMap.get("pageNum");
            }
            if((Integer) searchMap.get("pageSize") !=null){
                pageSize = (Integer) searchMap.get("pageSize");
            }
        }
        java.lang.String orderBy = "projectid desc";
        PageHelper.startPage(pageNum,pageSize);//使用PageHelper插件完成分页
        Page<Project> projects = (Page<Project>) projectMapper.selectByExample(example);
        return projects;
    }
    @Override
    public List<Project> findByUserId(Integer userid) {
        return projectMapper.selectbyuserid(userid);
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
    public List<Project> findForExamine(Integer userid) {
        String url = "http://examineservice/examine/getprojectbyuserid/"+userid;
        Result page =  restTemplate.getForObject(url , Result.class);
        System.out.println(page);
        List<Integer> ids = (List<Integer>) page.getData();
        System.out.println(ids);
        List<Project> list = new ArrayList<Project>();
        for (Integer id:ids) {
            list.add(projectMapper.selectByPrimaryKey(id));
        }
        System.out.println(list);
        return list;
    }
    @Override
    public Boolean del(List<Integer> ids) {
        for (Integer id:ids) {
            projectMapper.deleteByPrimaryKey(id);
        }
        return true;
    }

}
