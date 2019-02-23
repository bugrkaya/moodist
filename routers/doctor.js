'use strict';

module.exports = (app, db) => {

    // GET all doctors, denendi
    app.get('/doctor', (req, res) => {
        db.doctor.findAll()
            .then(doctors => {
                res.json(doctors);
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
                res.json(doctor);
            });
    });
    
    // POST a doctor, denendi
    app.post('/doctor', (req, res) => {
        db.doctor.create({
                name: req.body.name,
            })
            .then(doctor => {
                res.json(doctor);
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
                    res.json(score);
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
                    res.json(score);
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
                    res.json(score);
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
                    res.json(score);
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
                res.json(doctor);
            });
    });

    app.get('doctor/:id/patients', (req, res) => {
        db.patient.findAll({
                where: {
                    doctor_id: req.params.id
                }
            })
            .then(patients => {
                res.json(patients);
            });
    });

    // GET one pet by id
    app.get('doctor/:id/patient/:patient_id', (req, res) => {
        const id = req.params.patient_id;
        db.patient.find({
                where: {
                    id: id
                }
            })
            .then(pet => {
                res.json(pet);
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
                res.json(newPet);
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
                res.json(deletedDoctor);
            });
    });

};
