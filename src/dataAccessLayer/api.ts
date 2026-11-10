type TaskDetailsAttributes = {
    title: string
    description: string | null
}


export type TaskDetailsData = {
    id: string
    attributes: TaskDetailsAttributes
    relationships: {
        board: {
            data: {
                id: string
            }
        }
    }
}

export type IncludedBoard = {
    attributes: {
        title: string
    }
}

const headers = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey){ return undefined}
  return {
    'api-key': apiKey
  }
}


export const getTrack = (selectedTaskId: string, boardId: string | null) => {
    const promise: Promise<{ data: TaskDetailsData, included: Array<IncludedBoard> }> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
        headers: headers()
    }).then(res => res.json())

    // const promise: Promise<{data: TaskDetailsData, included: Array<IncludedBoard>}> = Promise.resolve(dataTrackDetail)

    return promise
}

// const dataTrackDetail ={
//   "data": {
//     "id": "0d1dc9e2-8fdf-4ac1-88a9-33afdfd4a532",
//     "type": "tasks",
//     "attributes": {
//       "title": "gtgtgtgt2222",
//       "description": "",
//       "order": -5,
//       "status": 0,
//       "priority": 1,
//       "startDate": null,
//       "deadline": null,
//       "addedAt": "2026-11-04T17:15:27.808Z",
//       "updatedAt": "2026-11-04T20:15:32.249Z",
//       "attachments": []
//     },
//     "relationships": {
//       "board": {
//         "data": {
//           "id": "018180f9-ec9a-4e22-8ca1-6b4d42eebb13",
//           "type": "boards"
//         }
//       }
//     }
//   },
//   "included": [
//     {
//       "id": "018180f9-ec9a-4e22-8ca1-6b4d42eebb13",
//       "type": "boards",
//       "attributes": {
//         "title": "11111"
//       }
//     }
//   ]
// }



type GlobalTaskListItemAttributes = {
    title: string
    status: number
    addedAt: string
    priority: number
}

type TaskRelationships = {
    board: {
        data: {
            id: string
        }
    }
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    attributes: GlobalTaskListItemAttributes
    relationships: TaskRelationships
}


export const getTasks = () => {
    const promise: Promise<{data: Array<GlobalTaskListItemJsonApiData>}> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/tasks`, {
        headers: headers()
    }).then(res => res.json())

    // const promise: Promise<{data: Array<GlobalTaskListItemJsonApiData>}> = Promise.resolve(tasksData)

    return promise
}

// const tasksData = {
//   "data": [
//     {
//       "id": "0d1dc9e2-8fdf-4ac1-88a9-33afdfd4a532",
//       "type": "tasks",
//       "attributes": {
//         "title": "gtgtgtgt2222",
//         "status": 0,
//         "priority": 1,
//         "addedAt": "2026-11-04T17:15:27.808Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "018180f9-ec9a-4e22-8ca1-6b4d42eebb13",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "8ca996ec-de33-4448-8c40-531873139637",
//       "type": "tasks",
//       "attributes": {
//         "title": "444441111",
//         "status": 0,
//         "priority": 1,
//         "addedAt": "2026-11-04T16:58:46.736Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "018180f9-ec9a-4e22-8ca1-6b4d42eebb13",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "2dbc9222-1605-4984-a382-f0cf1630667c",
//       "type": "tasks",
//       "attributes": {
//         "title": "1",
//         "status": 0,
//         "priority": 1,
//         "addedAt": "2026-11-04T14:22:21.604Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "252843f7-be2e-45dc-9699-f775783a5b57",
//       "type": "tasks",
//       "attributes": {
//         "title": "1",
//         "status": 0,
//         "priority": 1,
//         "addedAt": "2026-11-04T14:22:19.256Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "22c10164-2f6b-42b1-84a6-86e3ce276151",
//       "type": "tasks",
//       "attributes": {
//         "title": "1",
//         "status": 0,
//         "priority": 1,
//         "addedAt": "2026-11-04T14:22:16.579Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "4b66b2b5-86ce-4d90-9efb-cf0b3fcf2f33",
//       "type": "tasks",
//       "attributes": {
//         "title": "test4",
//         "status": 2,
//         "priority": 1,
//         "addedAt": "2026-11-04T13:38:01.112Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "7509c003-9ac1-4e7c-9537-2d620687b30f",
//       "type": "tasks",
//       "attributes": {
//         "title": "test3",
//         "status": 2,
//         "priority": 1,
//         "addedAt": "2026-11-04T13:37:55.024Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "3d63b371-b379-4c86-8ce2-0e9994328eef",
//       "type": "tasks",
//       "attributes": {
//         "title": "test2",
//         "status": 2,
//         "priority": 1,
//         "addedAt": "2026-11-04T13:37:51.629Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "c40707d5-62f2-4774-9916-2c22f88cf42f",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "383e3528-e5b7-47f0-b26b-2ebb8802e949",
//       "type": "tasks",
//       "attributes": {
//         "title": "test1",
//         "status": 2,
//         "priority": 1,
//         "addedAt": "2026-11-04T13:23:03.006Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "c40707d5-62f2-4774-9916-2c22f88cf42f",
//             "type": "boards"
//           }
//         }
//       }
//     },
//     {
//       "id": "7de8743b-9bab-439e-a51b-78b0d470e9d1",
//       "type": "tasks",
//       "attributes": {
//         "title": "00000",
//         "status": 2,
//         "priority": 0,
//         "addedAt": "2026-11-04T08:33:35.349Z",
//         "attachmentsCount": 0
//       },
//       "relationships": {
//         "board": {
//           "data": {
//             "id": "bbc3ecbb-1eba-48ae-97b2-865a598e3486",
//             "type": "boards"
//           }
//         }
//       }
//     }
//   ],
//   "included": [
//     {
//       "id": "018180f9-ec9a-4e22-8ca1-6b4d42eebb13",
//       "type": "boards",
//       "attributes": {
//         "title": "11111"
//       }
//     },
//     {
//       "id": "15b8e013-746c-40e2-a9ec-1df89df5a6d2",
//       "type": "boards",
//       "attributes": {
//         "title": "Todo2"
//       }
//     },
//     {
//       "id": "c40707d5-62f2-4774-9916-2c22f88cf42f",
//       "type": "boards",
//       "attributes": {
//         "title": "Todo4"
//       }
//     },
//     {
//       "id": "bbc3ecbb-1eba-48ae-97b2-865a598e3486",
//       "type": "boards",
//       "attributes": {
//         "title": "66666"
//       }
//     }
//   ],
//   "meta": {
//     "page": 1,
//     "pageSize": 10,
//     "totalCount": 28,
//     "pagesCount": 3
//   }
// }