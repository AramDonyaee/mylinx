FROM public.ecr.aws/docker/library/php:8.2.0-fpm-alpine as php

ENV PHP_OPCACHE_ENABLE=1
ENV PHP_OPCACHE_ENABLE_CLI=0
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS=1
ENV PHP_OPCACHE_REVALIDATE_FREQ=1

RUN echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories
RUN apk add -U shadow

RUN usermod -u 1000 www-data

RUN apk update
RUN apk add unzip libpq-dev nginx
RUN docker-php-ext-install pdo pdo_mysql bcmath opcache

WORKDIR /var/www
COPY --chown=www-data . .

COPY ./docker/php/php.ini /usr/local/etc/php/php.ini
COPY ./docker/php/php-fpm.conf /usr/local/etc/php-fpm.d/www.conf
COPY ./docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=public.ecr.aws/docker/library/composer:2.5.4 /usr/bin/composer /usr/bin/composer

RUN chmod -R 755 /var/www/storage
RUN chmod -R 755 /var/www/bootstrap


ENTRYPOINT ["sh", "./docker/entrypoint.sh" ]

