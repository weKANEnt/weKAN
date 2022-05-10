const { users, vdata, admin, candidates, halls, faculties } = require("../db/models");

/**
 *
 * @param {*} email
 * @returns
 */
module.exports.findAdmin = async function (email) {
  if (email) {
    const adminn = await admin.findOne({
      where: {
        email: email,
      },
    });
    if (adminn) {
      return adminn;
    } else {
      return null;
    }
  } else {
    return 0;
  }
};

module.exports.findAdminById = async function (aid) {
  if (aid) {
    const adminn = await admin.findOne({
      where: {
        aid: aid,
      },
    });
    if (adminn) {
      return adminn;
    } else {
      return null;
    }
  } else {
    return 0;
  }
};

/**
 * Adds voter to the list of voters
 * @param {*} email
 * @returns
 */
module.exports.addVoter = async function (email, hid, fid) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });

    let newVoter;
    let hall;
    let faculty;

    if (!voter) {
      newVoter = await users.create({
        votestatus: false,
      });
      
      hall = await halls.findOne({
        where: {
          hid: hid,
        }
      });

      faculty = await faculties.findOne({
        where: {
          fid: fid,
        }
      });

      newVoter = await vdata.create({
        emid: newVoter.uid,
        email: email,
        hall: hall.hallName,
        faculty: faculty.facultyName
      });
      return 0;
    } else {
      return 1;
    }
  }
  return 2;
};

module.exports.addCandidate = async function (fname, lname, email, hid, fid, position, about){
  if (email) {
    console.log(email)
    const candidate = await candidates.findOne({
      where: {
        email: email,
      },
      attributes: ['cid', 'email', 'hall', 'faculty']
    });

    let newCandidate;
    let hall;
    let faculty;

    if (!candidate) {
      
      hall = await halls.findOne({
        where: {
          hid: hid,
        }
      });

      faculty = await faculties.findOne({
        where: {
          fid: fid,
        }
      });
      console.log(faculty);
      newCandidate = await candidates.create({
      firstName: fname,
      lastName: lname,
      email: email,
      hall: hall.hallName,
      faculty: faculty.facultyName,
      position: position,
      about: about
    });
    return 0;
    }else {
      return 1;
    }
  }
  return 2;
};
