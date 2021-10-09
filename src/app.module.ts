import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicantsModule } from './applicants/applicants.module';
import { EmployeesModule } from './employees/employees.module';
import { CompetencesModule } from './competences/competences.module';
import { JobTitlesModule } from './job-titles/job-titles.module';
import { ProfessionsModule } from './professions/professions.module';
import { SchoolarityTypesModule } from './schoolarity-types/schoolarity-types.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { EmployeeStudiesModule } from './employee-studies/employee-studies.module';
import config from './config';

const configModule = ConfigModule.forRoot({ load: config });
const typeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    username: configService.get('database.username'),
    password: configService.get('database.password'),
    database: configService.get('database.database'),
    autoLoadEntities: true,
    synchronize: true,
  }),
});

@Module({
  imports: [configModule, typeOrmModule, UsersModule, ApplicantsModule, EmployeesModule, CompetencesModule, JobTitlesModule, ProfessionsModule, SchoolarityTypesModule, InstitutionsModule, WorkRecordsModule, EmployeeStudiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
