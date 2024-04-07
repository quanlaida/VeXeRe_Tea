// import
import { Student } from "../models/student.js";

// hàm rút gọn (hàm hỗ trợ)
const getEleId = (id) => {
    return document.getElementById(id);
}

let stationList = [];
// lấy thông tin từ BE
const fetchStudents = () => {
    axios({
        url: `http://localhost:3000/api/v1/stations`,
        method: 'GET',
    }).then((response) => {
        stationList = response.data;
        console.log(response);
        renderStation();
    }).catch((error) => {
        console.log(error);
    });
}

// hiển thị danh sách sinh viên ra màn hình

const renderStation = () => {
    let htmlStudent = ``;
    for (const station of stationList) {
        htmlStudent += `
            <tr>
                <td>${station.id}</td>
                <td>${station.name}</td>
                <td>${station.address}</td>
                <td>${station.province}</td>
                <td>
                    <button class="btn btn-danger deteleStudenBtn" onclick="deleteStudent(${station.id})" >Xóa</button>
                    <button class="btn btn-info" onclick="getStudent(${station.id})">Cập nhật</button>
                </td>
            </tr>`;
    }
    document.getElementById(`tableDanhSach`).innerHTML = htmlStudent;
}

// thêm snh viên

const addStudent = () => {
    const studentId = getEleId("id").value;
    const studentName = getEleId("name").value;
    const studentEmail = getEleId("email").value;
    const studentPhone = getEleId("phone").value;
    const studenIdCard = getEleId("idCard").value;
    const studentDiemToan = getEleId("math").value;
    const studentDiemHoa = getEleId("chemistry").value;
    const studentDiemLy = getEleId("physics").value;

    const newStudent = new Student(studentId, studentName, studentEmail, studentPhone, studenIdCard, studentDiemToan, studentDiemLy, studentDiemHoa);
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/ThemSinhVien`,
        method: 'POST',
        data: { newStudent },
    }).then((response) => {
        fetchStudents();
    }).catch((error) => {
        console.log(error);
    });
}
window.addStudent = addStudent;

// xóa sinh viên
const deleteStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/${id}`,
        method: "DELETE",
    }).then((response) => {
        fetchStudents();
    }).catch((error) => {
        console.log(error);
    });
}

window.deleteStudent = deleteStudent;


// cập nhật sinh viên
const getStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/${id}`,
        method: "GET",
    }).then((response) => {
        document.getElementById("btnThem").click();
        getEleId("id").value = response.data.MaSV;
        getEleId("name").value = response.data.HoTen;
        getEleId("email").value = response.Email;
        getEleId("phone").value = response.data.SoDT;
        getEleId("idCard").value = response.data.CMND;
        getEleId("math").value = response.data.DiemToan;
        getEleId("chemistry").value = response.data.DiemLy;
        getEleId("physics").value = response.data.DiemHoa;
        getEleId("id").disable = true;
    }).catch((error) => {
        console.log(error);
    });
}

window.getStudent = getStudent;

// cập nhật thông tin sinh viên
const updateStudent = () => {
    const studentId = getEleId("id").value;
    const studentName = getEleId("name").value;
    const studentEmail = getEleId("email").value;
    const studentPhone = getEleId("phone").value;
    const studenIdCard = getEleId("idCard").value;
    const studentDiemToan = getEleId("math").value;
    const studentDiemHoa = getEleId("chemistry").value;
    const studentDiemLy = getEleId("physics").value;

    const updateStudent = new Student(studentId, studentName, studentEmail, studentPhone, studenIdCard, studentDiemToan, studentDiemLy, studentDiemHoa);
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien`,
        method: "PUT",
        data: updateStudent,
    }).then((response) => {
        getEleId("btnReset").click();
        getEleId("btnClose").click();
        getEleId("id").disable = false;
        // xuất lại danh sách sinh viên
        fetchStudents();
    }).catch((error) => {
        console.log(error);
    });
}

window.updateStudent = updateStudent;

fetchStudents();
