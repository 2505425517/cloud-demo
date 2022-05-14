package com.mywork.project.service;

import com.github.pagehelper.Page;
import com.mywork.project.pojo.Project;

import java.util.List;
import java.util.Map;

public interface ProjectService {

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
   public List<Project> findAll();

   public Boolean add(Project project);

    Page<Project> search(Map searchMap);

    List<Project> findByUserId(Integer userid);

   public Project findById(Integer id);

   public Boolean update(Project project);

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
    List<Project> findForExamine(Integer userid);

    public Boolean del(List<Integer> ids);
}
