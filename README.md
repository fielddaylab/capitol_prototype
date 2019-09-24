# JOWILDER

## Logging Events
Each log is sent with a number of fields required by [simplelog](https://github.com/fielddaylab/simplelog). Simple log allows for a custom field called event_data_complex along with its category enumerator:
  event_custom: category enumerator
  event_data_complex: JSON.stringify(log_data)
Each log_data is a JSON object for that specific category as defined below.
Note: Note: event_custom will always map to a string of the event name. For example, if an event called FOO had a field of "event_custom", its value would be a string "FOO". Not all events have this field.

#### Change Log
Versions:
1. Original
2. Restructured to flatten logging objects (which originally contained many sub-objects)
3. Simple log now sends player_id (if present) from the URL to log.php (9/24/2019)

### Logging 
Each event is comprised of:
1. Event Type (int):
   - checkpoint (0)
   - startgame (1)
   - endgame (2)
   - click (0)
   - hover (1)
2. Fields for Type Data
3. Event Subtype (int):
   - basic (1)
   - navigate (1)
   - notebook (2)
   - map (3)
   - notification (4)
   - object (5)
   - observation (6)
   - person (7)
   - cutscene (8)
   - wildcard (9) (assessments)
4. Fields for Subtype Data
5. Event Name (int) (contained within subtype data):
   - basic  (0) (default name)
   - open (1) (only used for the notebook/map)
   - close (2) (only used for the closeable items)
   - choice (3) (only used for the assessments)
   - next (4) (only used for the notebook)
   - prev (5) (only used for the notebook)
6. room fqid (Fully Qualified ID) (string, or 0 if not applicable e.g. for startgame)
7. id (fqid minus the room fqid) (string, or 0 if not applicable e.g. for startgame)

Data is as follows (none if not listed):
- Click: screen coordinates (int array), room coordinates (int array)
- Hover: start_time (int), end_time (int) (client-side time)
- Startgame: save code (int, 0 if not used), fullscreen mode on/off (bool), music on/off (bool), high quality graphics on/off (bool)
- notebook: page_number (int)
- wildcard: correct (string, the correct answer to the problem), answer (string, the selected answer)

Note: Each element in the game has a unique FQID.

When sent to the server, each log also contains a level (index of current save code, range 0-23).
Each log also gets its specific enumerator:
 - LOG_CHECKPOINT            = 0
 - LOG_STARTGAME             = 1
 - LOG_ENDGAME               = 2
 - LOG_NAVIGATE_CLICK        = 3
 - LOG_NOTEBOOK_CLICK        = 4
 - LOG_MAP_CLICK             = 5
 - LOG_NOTIFICATION_CLICK    = 6
 - LOG_OBJECT_CLICK          = 7
 - LOG_OBSERVATION_CLICK     = 8
 - LOG_PERSON_CLICK          = 9
 - LOG_CUTSCENE_CLICK        = 10
 - LOG_WILDCARD_CLICK        = 11
 - LOG_NAVIGATE_HOVER        = 12
 - LOG_NOTEBOOK_HOVER        = 13
 - LOG_MAP_HOVER             = 14
 - LOG_NOTIFICATION_HOVER    = 15
 - LOG_OBJECT_HOVER          = 16
 - LOG_OBSERVATION_HOVER     = 17
 - LOG_PERSON_HOVER          = 18
 - LOG_CUTSCENE_HOVER        = 19
 - LOG_WILDCARD_HOVER        = 20

