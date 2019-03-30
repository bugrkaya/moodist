'use strict'

function average(arr){
    if (arr.length > 0 ){
        var sum = 0
        for (var i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum / arr.length
    }
    else return 0
}

module.exports = (app, db) => {

    // GET all doctors, denendi
    app.get('/doctor', (req, res) => {
        db.doctor.findAll()
            .then(doctors => {
                return res.json(doctors);
            });
    });

    // GET one doctor by id, denendi
    app.get('/doctor/:id', (req, res) => {
        const id = req.params.id;
        db.doctor.find({
                where: {
                    id: id
                }
            })
            .then(doctor => {
                return res.json(doctor);
            });
    });
    
    // POST login
    app.post('/login', (req, res) => {
        let user = {};
        db.doctor.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((loggedUser) => {
                if (loggedUser === null) { //if a coach with the input email doesn't exist, throw 404 error
                    res.sendStatus(404)
                } else { // else the password is checked, if it's correct a coach token is generated
                    user = loggedUser.dataValues;
                    if (req.body.password != user.password) return res.status(401).send({
                        message: "Password is not correct!"
                    });
                    else { 
                        return res.json(loggedUser);
                    }
                }
            });
    });
    
    // POST a doctor
    app.post('/doctor', (req, res) => {
        db.doctor.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(doctor => {
                return res.json(doctor);
            })
    });

    //POST DIKKAT
    app.post('/doctor/:id/patient/:patient_id/dikkat', (req, res) => {
        const doctor_id = req.params.id
        const patient_id = req.params.patient_id
        var patient_name = ''
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            patient_name = patient.dataValues.name;

            var results = req.body.results
            var seqs = req.body.sequence
            
            var right_react = []
            var wrong_react = []
            
            var total_a = 0
            var total_not_a = 0
            
            for (var i = 0; i < results.length; i++) {
                if (results[i].letter === 'A') {
                    right_react.push(results[i].time)
                }
                else wrong_react.push(results[i].time)
            }
            
            for (var i = 0; i < seqs.length; i++) {
                if (seqs[i].letter === 'A') {
                    total_a++
                }
                else total_not_a++
            }
            
            console.log('\x1b[31m%s\x1b[0m', 'right_react: ' + right_react)
            console.log('\x1b[32m%s\x1b[0m', 'wrong_react: ' + wrong_react)
            console.log('\x1b[33m%s\x1b[0m', 'total_a: ' + total_a)
            console.log('\x1b[34m%s\x1b[0m', 'total_not_a: ' + total_not_a)
            console.log('\x1b[35m%s\x1b[0m', 'avg: ' + average(right_react).toFixed(2))
            
            
            db.dikkat.create({
                    dogru_basis_sayisi: right_react.length, 
                    yanlis_basis_sayisi: wrong_react.length, 
                    total_a_sayisi: total_a,
                    total_not_a_sayisi: total_not_a, 
                    hata_orani: 1 - (right_react.length / total_a).toFixed(3),
                    dogrularda_tepki_suresi_ort:  average(right_react).toFixed(2),
                    yanlislarda_tepki_suresi_ort:  average(wrong_react).toFixed(2),
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(score => {
                    return res.json(score);
                })
        })
    });
    
    //POST DURTU
    app.post('/doctor/:id/patient/:patient_id/durtu', (req, res) => {
        const doctor_id = req.params.id
        const patient_id = req.params.patient_id
        var patient_name = ''
        
        console.log(req.body)
        
        var results = req.body.results
        var seqs = req.body.sequence
        
        var right_react = []
        var wrong_react = []

        var total_true = 0
        var total_false = 0
        
        for (var i = 0; i < results.length; i++) {
            if (results[i].color === 'green' && results[i].shape === 'circle' && results[i].key === 'n') {
                right_react.push(results[i].time)
            }
            else if (results[i].color === 'red' && results[i].shape === 'polygon' && results[i].key === 'c') {
                right_react.push(results[i].time)
            }
            else wrong_react.push(results[i].time)
        }

        for (var i = 0; i < seqs.length; i++) {
            if (seqs[i].color === 'green' && seqs[i].shape === 'circle' && seqs[i].key === 'n') {
                total_true++
            }
            else total_false++
        }
        
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            
            console.log('bugra')
            
            patient_name = patient.dataValues.name;
            db.durtu.create({
                    dogru_basis_sayisi: right_react.length, 
                    yanlis_basis_sayisi: wrong_react.length, 
                    total_dogru_sayisi: total_true,
                    total_yanlis_sayisi: total_false,
                    hata_orani: 1 - (right_react.length / total_true).toFixed(3),
                    dogrularda_tepki_suresi_ort:  average(right_react).toFixed(2),
                    yanlislarda_tepki_suresi_ort:  average(wrong_react).toFixed(2),
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(score => {
                    return res.json(score);
                })
        })
    });
    
    //POST HAFIZA
    app.post('/doctor/:id/patient/:patient_id/hafiza', (req, res) => {
        const doctor_id = req.params.id
        const patient_id = req.params.patient_id
        var patient_name = ''
        
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            patient_name = patient.dataValues.name;
            db.hafiza.create({
                    gelinen_seviye: req.body.result,
                    tur: req.body.tur,
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(score => {
                    return res.json(score);
                })
        })
    });
    
    //POST RISK
    app.post('/doctor/:id/patient/:patient_id/risk', (req, res) => {
        const doctor_id = req.params.id
        const patient_id = req.params.patient_id
        var patient_name = ''

        var results = req.body.results
        var blown = 0
        var total_clicks = 0
        var total_limit = 0
        var total_earining = 0
        for (var i = 0; i < results.length; i++){
            if (results[i].blowed == true){
                blown++
            }
            total_clicks += results[i].clicks
            total_limit += results[i].limit
            total_earining += results[i].earning
        }
            
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            patient_name = patient.dataValues.name;
            db.risk.create({
                    ortalama_balon_kazanc: total_earining / results.length,
                    total_kazanc : total_earining, 
                    ortalama_balon_sisirme_sayisi: (total_clicks / results.length).toFixed(2),
                    patlayan_balon_sayisi: blown,
                    risk_alma_katsayisi : (total_clicks / total_limit).toFixed(2),
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(score => {
                    return res.json(score);
                })
        })
    });

    // DELETE single doctor
    app.delete('/doctor/:id', (req, res) => {
        const id = req.params.id;
        db.doctor.destroy({
                where: {
                    id: id
                }
            })
            .then(doctor => {
                return res.json(doctor);
            });
    });
    
    // DELETE single patient
    app.delete('/doctor/:doctor_id/patient/:patient_id', (req, res) => {
        const id = req.params.patient_id;
        db.patient.destroy({
                where: {
                    doctor_id: req.params.doctor_id,
                    id: id
                }
            })
            .then(doctor => {
                return res.json(doctor);
            });
    });
    
    // Get all patients
    app.get('/doctor/:id/patients', (req, res) => {
        console.log('bugra')
        db.patient.findAll({
                where: {
                    doctor_id: req.params.id
                }
            })
            .then(patients => {
               return res.json(patients);
            });
    });

    // GET single patient
    app.get('/doctor/:id/patient/:patient_id', (req, res) => {
        const id = req.params.patient_id;
        db.patient.find({
                where: {
                    doctor_id: req.params.id,
                    id: id
                }
            })
            .then(pet => {
                return res.json(pet);
            });
    });

    // POST single patient
    app.post('/doctor/:id/patient', (req, res) => {
        const name = req.body.name;
        db.doctor.find({
            where: {
                id : req.params.id
            }
        }).then(doctor => (
            db.patient.create({
                name: name,
                doctor_id: Number(req.params.id),
                doctor_name: doctor.dataValues.name
            })
            .then(newPet => {
                return res.json(newPet);
            })
        ))
    });
    
    // PATCH single doctor
    app.patch('/doctor/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.doctor.find({
                where: {
                    id: id
                }
            })
            .then(owner => {
                return doctor.updateAttributes(updates)
            })
            .then(deletedDoctor => {
                return res.json(deletedDoctor);
            });
    });

};
