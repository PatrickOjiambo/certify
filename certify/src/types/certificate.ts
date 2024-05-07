export class Certificate {
    course_name: string;
    university_name: string;
    student_reg_number: string;
    certificate_serial_number: string;
    certificate_image_url: string;

    constructor(course_name: string, university_name: string, student_reg_number: string, certificate_serial_number: string, certificate_image_url: string) {
        this.course_name = course_name;
        this.university_name = university_name;
        this.student_reg_number = student_reg_number;
        this.certificate_image_url = certificate_image_url;
        this.certificate_serial_number = certificate_serial_number;
    }
}