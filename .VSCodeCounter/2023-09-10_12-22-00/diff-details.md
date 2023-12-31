# Diff Details

Date : 2023-09-10 12:22:00

Directory /Users/mohammadkiyan/Documents/GitHub/ConjuringEscaperoom/src/Dashboard/backend

Total : 113 files,  642 codes, 41 comments, -511 blanks, all 172 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [src/Dashboard/backend/.env](/src/Dashboard/backend/.env) | Properties | 12 | 0 | 0 | 12 |
| [src/Dashboard/backend/config/cors.ts](/src/Dashboard/backend/config/cors.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/Dashboard/backend/config/database.ts](/src/Dashboard/backend/config/database.ts) | TypeScript | 6 | 0 | 4 | 10 |
| [src/Dashboard/backend/controllers/crossController.ts](/src/Dashboard/backend/controllers/crossController.ts) | TypeScript | 106 | 2 | 12 | 120 |
| [src/Dashboard/backend/controllers/fileManager.ts](/src/Dashboard/backend/controllers/fileManager.ts) | TypeScript | 3 | 0 | 2 | 5 |
| [src/Dashboard/backend/dist/config/cors.js](/src/Dashboard/backend/dist/config/cors.js) | JavaScript | 11 | 0 | 1 | 12 |
| [src/Dashboard/backend/dist/config/database.js](/src/Dashboard/backend/dist/config/database.js) | JavaScript | 8 | 0 | 1 | 9 |
| [src/Dashboard/backend/dist/controllers/cross/crossController.js](/src/Dashboard/backend/dist/controllers/cross/crossController.js) | JavaScript | 60 | 0 | 1 | 61 |
| [src/Dashboard/backend/dist/controllers/crossController.js](/src/Dashboard/backend/dist/controllers/crossController.js) | JavaScript | 125 | 2 | 1 | 128 |
| [src/Dashboard/backend/dist/controllers/dirFilesSender.js](/src/Dashboard/backend/dist/controllers/dirFilesSender.js) | JavaScript | 15 | 0 | 1 | 16 |
| [src/Dashboard/backend/dist/controllers/fileManager.js](/src/Dashboard/backend/dist/controllers/fileManager.js) | JavaScript | 15 | 0 | 1 | 16 |
| [src/Dashboard/backend/dist/index.js](/src/Dashboard/backend/dist/index.js) | JavaScript | 52 | 3 | 1 | 56 |
| [src/Dashboard/backend/dist/middleware/filesystem/createDirectory.js](/src/Dashboard/backend/dist/middleware/filesystem/createDirectory.js) | JavaScript | 18 | 3 | 1 | 22 |
| [src/Dashboard/backend/dist/middleware/filesystem/downloadFiles.js](/src/Dashboard/backend/dist/middleware/filesystem/downloadFiles.js) | JavaScript | 39 | 1 | 1 | 41 |
| [src/Dashboard/backend/dist/middleware/filesystem/uploadFiles.js](/src/Dashboard/backend/dist/middleware/filesystem/uploadFiles.js) | JavaScript | 20 | 0 | 1 | 21 |
| [src/Dashboard/backend/dist/middleware/saveToDB.js](/src/Dashboard/backend/dist/middleware/saveToDB.js) | JavaScript | 31 | 0 | 1 | 32 |
| [src/Dashboard/backend/dist/models/cross/crossModel.js](/src/Dashboard/backend/dist/models/cross/crossModel.js) | JavaScript | 35 | 0 | 1 | 36 |
| [src/Dashboard/backend/dist/models/crossModel.js](/src/Dashboard/backend/dist/models/crossModel.js) | JavaScript | 29 | 0 | 1 | 30 |
| [src/Dashboard/backend/dist/routes/cross/crossRouter.js](/src/Dashboard/backend/dist/routes/cross/crossRouter.js) | JavaScript | 2 | 0 | 1 | 3 |
| [src/Dashboard/backend/dist/routes/crossRouter.js](/src/Dashboard/backend/dist/routes/crossRouter.js) | JavaScript | 17 | 0 | 1 | 18 |
| [src/Dashboard/backend/dist/utils/date.js](/src/Dashboard/backend/dist/utils/date.js) | JavaScript | 13 | 0 | 1 | 14 |
| [src/Dashboard/backend/dist/utils/server/createDatabase.js](/src/Dashboard/backend/dist/utils/server/createDatabase.js) | JavaScript | 46 | 3 | 1 | 50 |
| [src/Dashboard/backend/index.ts](/src/Dashboard/backend/index.ts) | TypeScript | 35 | 3 | 17 | 55 |
| [src/Dashboard/backend/middleware/filesystem/createDirectory.ts](/src/Dashboard/backend/middleware/filesystem/createDirectory.ts) | TypeScript | 14 | 3 | 6 | 23 |
| [src/Dashboard/backend/middleware/filesystem/downloadFiles.ts](/src/Dashboard/backend/middleware/filesystem/downloadFiles.ts) | TypeScript | 25 | 1 | 5 | 31 |
| [src/Dashboard/backend/middleware/filesystem/uploadFiles.ts](/src/Dashboard/backend/middleware/filesystem/uploadFiles.ts) | TypeScript | 16 | 0 | 5 | 21 |
| [src/Dashboard/backend/middleware/saveToDB.ts](/src/Dashboard/backend/middleware/saveToDB.ts) | TypeScript | 25 | 0 | 5 | 30 |
| [src/Dashboard/backend/models/crossModel.ts](/src/Dashboard/backend/models/crossModel.ts) | TypeScript | 28 | 0 | 3 | 31 |
| [src/Dashboard/backend/package-lock.json](/src/Dashboard/backend/package-lock.json) | JSON | 3,400 | 0 | 1 | 3,401 |
| [src/Dashboard/backend/package.json](/src/Dashboard/backend/package.json) | JSON | 40 | 0 | 1 | 41 |
| [src/Dashboard/backend/routes/crossRouter.ts](/src/Dashboard/backend/routes/crossRouter.ts) | TypeScript | 12 | 0 | 4 | 16 |
| [src/Dashboard/backend/tsconfig.json](/src/Dashboard/backend/tsconfig.json) | JSON with Comments | 11 | 90 | 9 | 110 |
| [src/Dashboard/backend/utils/date.ts](/src/Dashboard/backend/utils/date.ts) | TypeScript | 9 | 0 | 1 | 10 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/api/initiateRedux.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/api/initiateRedux.ts) | TypeScript | -13 | 0 | -1 | -14 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/api/updateCross.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/api/updateCross.ts) | TypeScript | -21 | 0 | -1 | -22 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/AbsoluteIconButton.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/AbsoluteIconButton.tsx) | TypeScript JSX | -36 | 0 | -5 | -41 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button.tsx) | TypeScript JSX | -56 | 0 | -11 | -67 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button/Button.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button/Button.tsx) | TypeScript JSX | -56 | 0 | -11 | -67 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button/ButtonGroup.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Button/ButtonGroup.tsx) | TypeScript JSX | 0 | 0 | -1 | -1 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Card.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Card.tsx) | TypeScript JSX | -52 | 0 | -10 | -62 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/CardImage.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/CardImage.tsx) | TypeScript JSX | -19 | 0 | -5 | -24 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Cardbox.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Cardbox.tsx) | TypeScript JSX | -118 | -3 | -19 | -140 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Carousel.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Carousel.tsx) | TypeScript JSX | -49 | -1 | -8 | -58 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Paragraph.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Paragraph.tsx) | TypeScript JSX | -12 | 0 | -5 | -17 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Title.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Card/Title.tsx) | TypeScript JSX | -12 | 0 | -4 | -16 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Cross.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Cross.tsx) | TypeScript JSX | -76 | 0 | -11 | -87 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/DeviceInfo.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/DeviceInfo.tsx) | TypeScript JSX | -39 | 0 | -5 | -44 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/IDFields.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/IDFields.tsx) | TypeScript JSX | -126 | 0 | -12 | -138 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Information.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Information.tsx) | TypeScript JSX | -58 | -2 | -9 | -69 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/LEDs.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/LEDs.tsx) | TypeScript JSX | -63 | 0 | -12 | -75 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Relay.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Relay.tsx) | TypeScript JSX | -55 | 0 | -9 | -64 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/RelayFields.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/RelayFields.tsx) | TypeScript JSX | -54 | 0 | -14 | -68 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Sensitivity.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/Sensitivity.tsx) | TypeScript JSX | -55 | 0 | -9 | -64 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/SensitivityFields.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/SensitivityFields.tsx) | TypeScript JSX | -53 | 0 | -15 | -68 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/SevenSegmentDisplay.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/SevenSegmentDisplay.tsx) | TypeScript JSX | -49 | 0 | -9 | -58 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/TimeFields.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/TimeFields.tsx) | TypeScript JSX | -95 | -1 | -17 | -113 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/index.tsx) | TypeScript JSX | -55 | 0 | -6 | -61 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/sections/Actuator.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/sections/Actuator.tsx) | TypeScript JSX | -63 | 0 | -13 | -76 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/sections/Scores.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/sections/Scores.tsx) | TypeScript JSX | -100 | 0 | -15 | -115 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Button.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Button.tsx) | TypeScript JSX | -19 | 0 | -6 | -25 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/LeftToolbar.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/LeftToolbar.tsx) | TypeScript JSX | -95 | 0 | -8 | -103 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/RightToolbar.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/RightToolbar.tsx) | TypeScript JSX | -31 | 0 | -6 | -37 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Section.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Section.tsx) | TypeScript JSX | -37 | 0 | -5 | -42 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Toolbar.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Cross/toolbars/Toolbar.tsx) | TypeScript JSX | -17 | 0 | -8 | -25 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Divider.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Divider.tsx) | TypeScript JSX | -11 | 0 | -8 | -19 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/DragDropFile.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/DragDropFile.tsx) | TypeScript JSX | -32 | -35 | -8 | -75 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Checkbox.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Checkbox.tsx) | TypeScript JSX | -74 | 0 | -12 | -86 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Combobox.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Combobox.tsx) | TypeScript JSX | -73 | 0 | -8 | -81 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Counter.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Counter.tsx) | TypeScript JSX | -73 | 0 | -11 | -84 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/IconInput.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/IconInput.tsx) | TypeScript JSX | -36 | 0 | -5 | -41 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Input.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Input.tsx) | TypeScript JSX | -105 | 0 | -11 | -116 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Range.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/Range.tsx) | TypeScript JSX | -35 | 0 | -6 | -41 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/SwitchButton.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Form/SwitchButton.tsx) | TypeScript JSX | -88 | 0 | -11 | -99 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Image.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Image.tsx) | TypeScript JSX | -14 | 0 | -4 | -18 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/List.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/List.tsx) | TypeScript JSX | -25 | 0 | -4 | -29 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Control.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Control.tsx) | TypeScript JSX | -107 | 0 | -17 | -124 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Index.tsx) | TypeScript JSX | -60 | 0 | -14 | -74 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Player.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Player.tsx) | TypeScript JSX | -44 | 0 | -10 | -54 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Playlist.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/Mediaplayer/Playlist.tsx) | TypeScript JSX | -308 | -1 | -16 | -325 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/Index.tsx) | TypeScript JSX | -25 | 0 | -6 | -31 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Control.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Control.tsx) | TypeScript JSX | -54 | 0 | -12 | -66 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Explorer.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Explorer.tsx) | TypeScript JSX | -50 | 0 | -8 | -58 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Index.tsx) | TypeScript JSX | -26 | 0 | -4 | -30 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/MediaItem.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/MediaItem.tsx) | TypeScript JSX | -37 | 0 | -6 | -43 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Zone.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/mediaPlayer/Zone.tsx) | TypeScript JSX | -9 | 0 | -5 | -14 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/Signal.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/Signal.tsx) | TypeScript JSX | -75 | 0 | -5 | -80 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/signalFinder/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/signalFinder/Index.tsx) | TypeScript JSX | -75 | 0 | -9 | -84 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/signalMeter/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/PortableFinder/signal/signalMeter/Index.tsx) | TypeScript JSX | -58 | 0 | -6 | -64 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/TagFinder/Index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/TagFinder/Index.tsx) | TypeScript JSX | -15 | 0 | -7 | -22 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/TagFinder/TagReader.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/TagFinder/TagReader.tsx) | TypeScript JSX | -25 | 0 | -6 | -31 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Clock.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Clock.tsx) | TypeScript JSX | -31 | -3 | -7 | -41 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/DarkModeToggle.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/DarkModeToggle.tsx) | TypeScript JSX | -18 | 0 | -2 | -20 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Links.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Links.tsx) | TypeScript JSX | -30 | 0 | -7 | -37 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Navbar.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/components/navigation/Navbar.tsx) | TypeScript JSX | -12 | 0 | -4 | -16 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/configs/ip.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/configs/ip.ts) | TypeScript | -5 | 0 | -2 | -7 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Cross.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Cross.tsx) | TypeScript JSX | -45 | 0 | -6 | -51 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/MusicBox.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/MusicBox.tsx) | TypeScript JSX | -9 | 0 | -3 | -12 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Player.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Player.tsx) | TypeScript JSX | -9 | 0 | -3 | -12 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Relay.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Relay.tsx) | TypeScript JSX | -7 | 0 | -3 | -10 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Setting.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/Setting.tsx) | TypeScript JSX | -7 | 0 | -3 | -10 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/TagFinder.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/TagFinder.tsx) | TypeScript JSX | -9 | 0 | -3 | -12 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/_app.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/_app.tsx) | TypeScript JSX | -14 | -1 | -5 | -20 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/_document.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/_document.tsx) | TypeScript JSX | -12 | 0 | -2 | -14 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/api/cross.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/api/cross.ts) | TypeScript | -22 | -1 | -5 | -28 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/api/hello.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/api/hello.ts) | TypeScript | -10 | -1 | -3 | -14 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/index.tsx](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/pages/index.tsx) | TypeScript JSX | -87 | -2 | -13 | -102 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/index.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/index.ts) | TypeScript | -11 | -2 | -5 | -18 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/cross.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/cross.ts) | TypeScript | -72 | -5 | -11 | -88 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/index.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/index.ts) | TypeScript | -8 | -3 | -4 | -15 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/theme.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/redux/reducers/theme.ts) | TypeScript | -26 | -7 | -8 | -41 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/styles/fonts.css](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/styles/fonts.css) | CSS | -4 | 0 | 0 | -4 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/styles/globals.css](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/styles/globals.css) | CSS | -20 | -2 | -4 | -26 |
| [src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/utils/crossAPI.ts](/src/Dashboard/frontend/conjuring_escaperoom_dashboard/src/utils/crossAPI.ts) | TypeScript | -60 | 0 | -15 | -75 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details