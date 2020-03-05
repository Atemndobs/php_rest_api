#!/bin/bash



php vendor/bin/schema generate-types src/ config/schema.yaml
bin/console doctrine:database:drop -n -q --force
bin/console doctrine:database:create
bin/console doctrine:schema:update --force




#
#rm src/Migrations/*.php
#bin/console make:migration
#bin/console doctrine:migrations:migrate -n -q
#bin/console doctrine:fixtures:load -n -q
#bin/console cache:clear


