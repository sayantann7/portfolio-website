"use client";

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface SkillGraphProps {
  name: string;
  level: number;
}

export default function SkillGraph({ name, level }: SkillGraphProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
      >
        <Progress value={level} className="h-2" />
      </motion.div>
    </div>
  );
}