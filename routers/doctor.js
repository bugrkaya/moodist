'use strict';

module.exports = (app, db) => {

    // GET all owners
    app.get('/doctor', (req, res) => {
        db.doctor.findAll()
            .then(owners => {
                res.json(owners);
            });
    });

    // GET one owner by id
    app.get('/doctor/:id', (req, res) => {
        const id = req.params.id;
        db.doctor.find({
                where: {
                    id: id
                }
            })
            .then(owner => {
                res.json(owner);
            });
    });
    
    app.post('/doctor', (req, res) => {
        db.doctor.create({
                name: req.body.name,
            })
            .then(newOwner => {
                res.json(newOwner);
            })
    });

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
                    score: req.body.score,
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(newOwner => {
                    res.json(newOwner);
                })
        })
    });
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
                    score: req.body.score,
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(newOwner => {
                    res.json(newOwner);
                })
        })
    });
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
                    score: req.body.score,
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(newOwner => {
                    res.json(newOwner);
                })
        })
    });
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
                    score: req.body.score,
                    patient_id: patient_id,
                    patient_name: patient_name
                })
                .then(newOwner => {
                    res.json(newOwner);
                })
        })
    });

    // DELETE single owner
    app.delete('/doctor/:id', (req, res) => {
        const id = req.params.id;
        db.doctor.destroy({
                where: {
                    id: id
                }
            })
            .then(deletedOwner => {
                res.json(deletedOwner);
            });
    });

    app.get('doctor/:id/patients', (req, res) => {
        db.patient.findAll({
                where: {
                    doctor_id: req.params.id
                }
            })
            .then(pets => {
                res.json(pets);
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

    // POST single pet
    app.post('/doctor/:id/patient', (req, res) => {
        const name = req.body.name;
        db.patient.create({
                name: name,
                doctor_id: Number(req.params.id)
            })
            .then(newPet => {
                res.json(newPet);
            });
    });

    // PATCH single pet
    app.patch('/patient/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.pets.find({
                where: {
                    id: id
                }
            })
            .then(pet => {
                return pet.updateAttributes(updates);
            })
            .then(updatedPet => {
                res.json(updatedPet);
            });
    });

    app.delete('/pet/:id', (req, res) => {
        const id = req.params.id;
        db.pets.destroy({
                where: {
                    id: id
                }
            })
            .then(deletedPet => {
                res.json(deletedPet);
            });
    });
    
    // PATCH single owner
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
            .then(updatedOwner => {
                res.json(updatedOwner);
            });
    });

};
