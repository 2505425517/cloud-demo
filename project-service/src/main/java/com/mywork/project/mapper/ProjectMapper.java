package com.mywork.project.mapper;


import com.mywork.project.pojo.Project;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface ProjectMapper extends Mapper<Project>  {

//    @Select("select * from tb_project where projectid = #{projectid}")
//    public List<Project> selectbyid (Integer projectid);
    @Select("select * from tb_project where userid = #{userid}")
    public List<Project> selectbyuserid (Integer userid);
}