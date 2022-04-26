package com.mywork.examine.mapper;


import com.mywork.examine.pojo.Examine;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface ExamineMapper extends Mapper<Examine>  {

    @Select("select * from tb_examine where projectid = #{projectid}")
    public List<Examine> selectbyprojectid (Integer projectid);

    @Select("select * from tb_examine where userid = #{userid}")
    public List<Examine> selectbyuserid (Integer userid);

    @Update("update tb_examine set examine_status = #{status} where projectid = #{projectid} and userid = #{userid}")
    public Integer updateStatus (Integer projectid,Integer userid,Integer status);

    @Select("select * from tb_examine where projectid = #{projectid} and userid = #{userid}")
    public Examine selectbyboth (Integer projectid,Integer userid);

    @Delete("delete from tb_examine where examine_status = 0")
    public Integer deleteNotworking();
}