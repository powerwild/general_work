const Doctor = require('./doctor');
const Patient = require('./patient');
class AppointmentError extends Error {
    constructor(problem, ...params){
        super(...params);
        if (Error.captureStackTrace){
            Error.captureStackTrace(this, AppointmentError);
        }
        this.name = 'AppointmentError';
        this.message = problem;
    }
}
class Appointment {
    constructor(doctor, patient, month, date, year, hour){
        this.doctor = doctor;
        this.patient = patient;
        this.month = month;
        this.date = date;
        this.year = year;
        this.hour = hour;
        this.checkAppointments = function(doctor, year, month, date, hour){
            for (let i = 0; i < doctor.docApps.length; i++){
            let obj = doctor.docApps[i];
                if (obj.year === year && obj.month === month && obj.date === date && obj.hour === hour) return false;
            }
        doctor.docApps.push(this);
        return true;
        }
        const today = new Date();

        if (hour <= 7 || hour >= 18){
            throw new AppointmentError('Invalid time slot');
        }
        if (!this.patient.insurance || !this.doctor.acceptsInsurance(this.patient.insurance)){
            throw new AppointmentError("Patient's insurance not supported");
        }
        if (year < today.getFullYear() || year === today.getFullYear() && month < today.getMonth() || year === today.getFullYear() && month === today.getMonth() && date <= today.getDate()){
            throw new AppointmentError('Appointment must be in the future');
        }
        if (!this.checkAppointments(doctor, year, month, date, hour)){
            throw new AppointmentError('Invalid time slot');
        }
    }
}
const doc = new Doctor('doc');
doc.addInsurance('BNL');
const me = new Patient('me');
me.setInsurance('BNL');
const app1 = new Appointment(doc, me, 12, 11, 2021, 10);
const app2 = new Appointment(doc, me, 12, 11, 2021, 15);

module.exports = [Appointment, AppointmentError];
