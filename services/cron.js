// const cron = require("node-cron");
// const { Op } = require("sequelize");
// const Chats = require("../models/chats");
// const ArchivedChat = require("../models/archeived-chat");

// exports.job = cron.schedule(
//   "*/5 * * * *", // Run every 5 minutes
//   archiveOldRecords
// );

// async function archiveOldRecords() {
//   try {
//     const fiveMinutesAgo = new Date();
//     fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

//     // Find records to archive
//     const recordsToArchive = await Chats.findAll({
//       where: {
//         date_time: {
//           [Op.lt]: fiveMinutesAgo,
//         },
//       },
//     });

//     await Promise.all(
//       recordsToArchive.map(async (record) => {
//         await ArchivedChat.create({
//           id: record.id,
//           message: record.message,
//           isImage: record.isImage,
//           date_time: record.date_time,
//           UserId: record.UserId,
//           GroupId: record.GroupId,
//         });
//         await record.destroy();
//       })
//     );
//   } catch (error) {
//     console.error("Error archiving old records:", error);
//   }
// }

/* const { CronJob } = require("cron");
const { Op } = require("sequelize");
const Chats = require("../models/chats");
const ArchivedChat = require("../models/archeived-chat");
exports.job = new CronJob(
  "0 0 * * *",
  function () {
    archiveOldRecords();
  },
  null,
  false,
  "Asia/Kolkata"
);

// async function archiveOldRecords() {
//     try {
//       const tenDaysAgo = new Date();
//       tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
//       // Find records to archive
//       const recordsToArchive = await ChatHistory.findAll({
//         where: {
//           date_time: {
//             [Op.lt]: tenDaysAgo,
//           },
//         },
//       });

//       // Archive records
//       await Promise.all(
//         recordsToArchive.map(async (record) => {
//           await ArchivedChat.create({
//             id: record.id,
//             message: record.message,
//             date_time: record.date_time,
//             isImage:record.isImage,
//             UserId: record.UserId,
//             GroupId: record.GroupId
//           });
//           await record.destroy();
//         })
//       );
//       console.log('Old records archived successfully.');
//     } catch (error) {
//       console.error('Error archiving old records:', error);
//     }
//   }

async function archiveOldRecords() {
  try {
    const fiveMinutesAgo = new Date();
    fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

    // Find records to archive
    const recordsToArchive = await Chats.findAll({
      where: {
        date_time: {
          [Op.lt]: fiveMinutesAgo,
        },
      },
    });
    await Promise.all(
      recordsToArchive.map(async (record) => {
        await ArchivedChat.create({
          id: record.id,
          message: record.message,
          isImage: record.isImage,
          date_time: record.date_time,
          UserId: record.UserId,
          GroupId: record.GroupId,
        });
        await record.destroy();
      })
    );
  } catch (error) {
    console.error("Error archiving old records:", error);
  }
}
 */


const { CronJob } = require("cron");
const { Op } = require("sequelize");
const Chats = require("../models/chats");
const ArchivedChat = require("../models/archeived-chat");
exports.job = new CronJob(
  "0 0 * * *",
  function () {
    archiveOldRecords();
  },
  null,
  false,
  "Asia/Kolkata"
);

// async function archiveOldRecords() {
//     try {
//       const tenDaysAgo = new Date();
//       tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
//       // Find records to archive
//       const recordsToArchive = await ChatHistory.findAll({
//         where: {
//           date_time: {
//             [Op.lt]: tenDaysAgo,
//           },
//         },
//       });

//       // Archive records
//       await Promise.all(
//         recordsToArchive.map(async (record) => {
//           await ArchivedChat.create({
//             id: record.id,
//             message: record.message,
//             date_time: record.date_time,
//             isImage:record.isImage,
//             UserId: record.UserId,
//             GroupId: record.GroupId
//           });
//           await record.destroy();
//         })
//       );
//       console.log('Old records archived successfully.');
//     } catch (error) {
//       console.error('Error archiving old records:', error);
//     }
//   }

async function archiveOldRecords() {
  try {
    const fiveMinutesAgo = new Date();
    fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

    // Find records to archive
    const recordsToArchive = await Chats.findAll({
      where: {
        date_time: {
          [Op.lt]: fiveMinutesAgo,
        },
      },
    });
    await Promise.all(
      recordsToArchive.map(async (record) => {
        await ArchivedChat.create({
          id: record.id,
          message: record.message,
          isImage: record.isImage,
          date_time: record.date_time,
          UserId: record.UserId,
          GroupId: record.GroupId,
        });
        await record.destroy();
      })
    );
  } catch (error) {
    console.error("Error archiving old records:", error);
  }
}