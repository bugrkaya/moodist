'use strict';

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
            db.dikkat.create({
                    hata_orani: req.body.score,
                    tepki_suresi: req.body.tepki_suresi,
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
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            patient_name = patient.dataValues.name;
            db.durtu.create({
                    dogru_sayisi: req.body.dogru_sayisi,
                    yanlis_sayisi: req.body.yanlis_sayisi,
                    tepki_suresi: req.body.tepki_suresi,
                    tusa_basis_sayisi: req.body.tusa_basis_sayisi,
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
                    total_saniye: req.body.total_saniye,
                    kacta_patladi: req.body.kacta_patladi,
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
        db.patient.find({
            where: {
                id: patient_id,
                doctor_id: doctor_id
            }
        }).then(patient => {
            patient_name = patient.dataValues.name;
            db.risk.create({
                    ortalama_balon: req.body.ortalama_balon,
                    balon_sisirme_sayisi: req.body.balon_sisirme_sayisi,
                    patlayan_balon_sayisi: req.body.patlayan_balon_sayisi,
                    balondan_sonra_gelen_balon: req.body.balondan_sonra_gelen_balon,
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
