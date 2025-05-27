#!/bin/bash
cd /home/kavia/workspace/code-generation/edureminder-4945-96477fa4/edu_reminder_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

