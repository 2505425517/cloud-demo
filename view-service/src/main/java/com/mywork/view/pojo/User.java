package com.mywork.view.pojo;

import com.mywork.user.pojo.Career;
import com.mywork.user.pojo.Study;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@Table(name="tb_user")
public class User implements Serializable {
    @Id
    private Integer userid;
    private String name;
    private Integer age;
    private String gender;
    private String nationality;
    private String mailAddress;
    private String phoneNum;
    private String precentcity;
    private String address;
    private String highestQualification;
    private String status;
    private List<com.mywork.user.pojo.Career> careers;
    private List<com.mywork.user.pojo.Study> studys;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getMailAddress() {
        return mailAddress;
    }

    public void setMailAddress(String mailAddress) {
        this.mailAddress = mailAddress;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getPrecentcity() {
        return precentcity;
    }

    public void setPrecentcity(String precentcity) {
        this.precentcity = precentcity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHighestQualification() {
        return highestQualification;
    }

    public void setHighestQualification(String highestQualification) {
        this.highestQualification = highestQualification;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<com.mywork.user.pojo.Career> getCareers() {
        return careers;
    }

    public void setCareers(List<Career> careers) {
        this.careers = careers;
    }

    public List<com.mywork.user.pojo.Study> getStudys() {
        return studys;
    }

    public void setStudys(List<Study> studys) {
        this.studys = studys;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", nationality='" + nationality + '\'' +
                ", mailAddress='" + mailAddress + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                ", precentcity='" + precentcity + '\'' +
                ", address='" + address + '\'' +
                ", highestQualification='" + highestQualification + '\'' +
                ", status='" + status + '\'' +
                ", careers=" + careers +
                ", studys=" + studys +
                '}';
    }
}


