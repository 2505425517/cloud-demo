package com.mywork.examine.mapper;


import com.mywork.examine.pojo.Examine;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface ExamineMapper extends Mapper<Examine>  {

    @Select("select * from tb_examine where projectid = #{projectid}")
    public List<Examine> selectbyprojectid (Integer projectid);

    @Select("select * from tb_examine where userid = #{userid}")
    public List<Examine> selectbyuserid (Integer userid);
}