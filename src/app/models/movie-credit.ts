export class MovieCredit {
  cast: CastMember[] = [];
  crew: CrewMember[] = [];
  constructor(data?: Partial<MovieCredit>) {
    Object.assign(this, data);
  }

  getWriters(): CrewMember[] {
    if (this.crew.length > 0) {
      return this.crew.filter((member) => member.isWriter());
    } else {
      return [];
    }
  }

  getDirector(): CrewMember | null {
    if (this.crew.length > 0) {
      const director = this.crew.find((member) => member.isDirector());
      return director ? director : null;
    } else {
      return null;
    }
  }

  getStars(): CastMember[] {
    if (this.cast.length > 0) {
      this.cast.sort((a, b) => a.order - b.order);
      return this.cast.filter((member) => member.isStar()).slice(0, 3);
    } else {
      return [];
    }
  }
}

export class CastMember {
  id: number = 0;
  name: string = '';
  character: string = '';
  profile_path: string | null = null;
  order: number = 0;

  constructor(data?: Partial<CastMember>) {
    Object.assign(this, data);
  }

  isStar(): boolean {
    return this.order >= 0 && this.order <= 2;
  }
}

export class CrewMember {
  id: number = 0;
  name: string = '';
  job: string = '';
  department: string = '';
  profile_path: string | null = null;

  constructor(data?: Partial<CrewMember>) {
    Object.assign(this, data);
  }

  isDirector(): boolean {
    return this.job === 'Director';
  }
  isWriter(): boolean {
    return ['Writer', 'Screenplay', 'Author'].includes(this.job);
  }
}
