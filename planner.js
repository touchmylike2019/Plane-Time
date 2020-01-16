const countDownDate = date => {
    const now = new Date().getTime()
    const distance = date - now
    if (distance < 0) {
        return {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    } else {
        return {
            day: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hour: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minute: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            second: Math.floor((distance % (1000 * 60)) / 1000)
        }
    }
}
const main = () => {
    const register = new Date("Feb 6, 2020 00:00:00").getTime()
    const exam = new Date("Mar 18, 2020 08:30:00").getTime()
    const resultExam = new Date("Mar 27, 2020 00:00:00").getTime()
    const interview = new Date("Mar 31, 2020 08:30:00").getTime()

    const register_day = document.getElementById("register_day")
    const register_hour = document.getElementById("register_hour")
    const register_minute = document.getElementById("register_minute")
    const register_second = document.getElementById("register_second")

    const exam_day = document.getElementById("exam_day")
    const exam_hour = document.getElementById("exam_hour")
    const exam_minute = document.getElementById("exam_minute")
    const exam_second = document.getElementById("exam_second")

    const result_exam_day = document.getElementById("result_exam_day")
    const result_exam_hour = document.getElementById("result_exam_hour")
    const result_exam_minute = document.getElementById("result_exam_minute")
    const result_exam_second = document.getElementById("result_exam_second")

    const interview_day = document.getElementById("interview_day")
    const interview_hour = document.getElementById("interview_hour")
    const interview_minute = document.getElementById("interview_minute")
    const interview_second = document.getElementById("interview_second")
    setInterval(() => {
        //Register day
        register_day.innerHTML = countDownDate(register).day
        register_hour.innerHTML = countDownDate(register).hour
        register_minute.innerHTML = countDownDate(register).minute
        register_second.innerHTML = countDownDate(register).second
        //Exam day
        exam_day.innerHTML = countDownDate(exam).day
        exam_hour.innerHTML = countDownDate(exam).hour
        exam_minute.innerHTML = countDownDate(exam).minute
        exam_second.innerHTML = countDownDate(exam).second
        //Result_Exam day
        result_exam_day.innerHTML = countDownDate(resultExam).day
        result_exam_hour.innerHTML = countDownDate(resultExam).hour
        result_exam_minute.innerHTML = countDownDate(resultExam).minute
        result_exam_second.innerHTML = countDownDate(resultExam).second
        //Interview day
        interview_day.innerHTML = countDownDate(interview).day
        interview_hour.innerHTML = countDownDate(interview).hour
        interview_minute.innerHTML = countDownDate(interview).minute
        interview_second.innerHTML = countDownDate(interview).second
    }, 1000)
}

main()
